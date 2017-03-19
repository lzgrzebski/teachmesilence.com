import { createClient } from 'contentful';
import { SPACE_ID, ACCESS_TOKEN } from './config';

const POST_CONTENT_TYPE = 'post';
const LIMIT = 1;
const ORDERBY = 'sys.createdAt';

let store;

function normalize(items) {
  return !items ? [] : items.map((item) => {
    const { sys: { createdAt, id }, fields } = item;
    const { title, description } = fields;
    const coverFields = fields.cover.fields;
    const cover = {
      title: coverFields.title,
      url: coverFields.file.url,
      width: coverFields.file.details.image.width,
      height: coverFields.file.details.image.height,
    };

    const photos = fields.photos.map((photo) => {
      const { fields: { file }, sys } = photo;
      const photoId = sys.id;
      const photoTitle = fields.title;
      const { url, details } = file;
      const { width, height } = details.image;
      return {
        id: photoId,
        title: photoTitle,
        url,
        width,
        height,
      };
    });

    return {
      id,
      createdAt,
      title,
      description,
      cover,
      photos,
    };
  });
}

function getClient() {
  if (!store) {
    store = createClient({
      accessToken: ACCESS_TOKEN,
      space: SPACE_ID,
    });
  }
  return store;
}

export default function callApi(page = 0) {
  return getClient().getEntries({
    content_type: POST_CONTENT_TYPE,
    limit: LIMIT,
    skip: page * LIMIT,
    order: ORDERBY,
  })
    .then(({ total, items, skip }) => {
      const isLastPageNow = LIMIT + skip >= total;
      const newPage = isLastPageNow ? page : page + 1;
      return { posts: normalize(items), isLastPageNow, newPage };
    });
}


