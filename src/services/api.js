import _keyBy from 'lodash.keyby';

import { createClient } from 'contentful';
import { SPACE_ID, ACCESS_TOKEN } from './config';

const POST_CONTENT_TYPE = 'post';
const LIMIT = 1;
const ORDERBY = 'sys.createdAt';

let store;

function normalize(items) {
  if (!items) return {}; // if no items skip normalization

  const normalizedItems = items.map((item) => {
    // normalize post fields
    const { sys: { createdAt }, fields } = item;
    const { title, description, slug } = fields;

    // normalize cover photo fields
    const coverFields = fields.cover.fields;
    const cover = {
      title: coverFields.title,
      url: coverFields.file.url,
      width: coverFields.file.details.image.width,
      height: coverFields.file.details.image.height,
    };

    // normalize photo fields
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

    // return normalized object
    return {
      slug,
      createdAt,
      title,
      description,
      cover,
      photos,
    };
  });

  // return posts {slug: {post} }
  return _keyBy(normalizedItems, 'slug');
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

export function getPosts(page = 0) {
  return getClient().getEntries({
    content_type: POST_CONTENT_TYPE,
    limit: LIMIT,
    skip: page * LIMIT,
    order: ORDERBY,
  })
    .then(({ total, items, skip }) => {
      const isLastPage = LIMIT + skip >= total;
      const newPage = isLastPage ? page : page + 1;
      return { posts: normalize(items), page: newPage, isLastPage };
    });
}


export function getSinglePost(slug) {
  return getClient().getEntries({
    content_type: POST_CONTENT_TYPE,
    limit: 1,
    'fields.slug': slug,
  })
    .then(({ items }) => ({ posts: normalize(items), currentPost: slug }));
}
