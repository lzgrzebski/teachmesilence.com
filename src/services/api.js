import _keyBy from 'lodash.keyby';

import { createClient } from 'contentful';
import config from './config.json';

const space = config.SPACE_ID;
const accessToken = config.ACCESS_TOKEN;

const POST_CONTENT_TYPE = 'post';
const LIMIT = 1;
const ORDERBY = '-sys.createdAt';

let store;

function normalize(items) {
  if (!items) return {}; // if no items skip normalization

  const normalizedItems = items.map((item) => {
    // normalize post fields
    const { sys: { createdAt }, fields } = item;
    const { title, description, slug } = fields;

    // normalize cover photo fields
    const coverFields = fields.cover && fields.cover.fields;
    const cover = coverFields && {
      id: fields.cover.sys.id,
      title: coverFields.title,
      url: coverFields.file.url,
      width: coverFields.file.details.image.width,
      height: coverFields.file.details.image.height,
    };

    // normalize photo fields
    const photos = fields.photos && fields.photos.map((photo) => {
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
      ...description && { description },
      ...cover && { cover },
      ...photos && { photos },
      shares: 0,
      sharesLoaded: false,
      liked: false,
    };
  });

  // return posts {[slug]: {post}, ...}
  return _keyBy(normalizedItems, 'slug');
}

function getClient() {
  if (!store) {
    store = createClient({
      accessToken,
      space,
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

export function getRecommendedPosts(excludedPosts) {
  return getClient().getEntries({
    content_type: POST_CONTENT_TYPE,
    limit: 3,
    'fields.slug[nin]': excludedPosts,
  })
    .then(({ items }) => ({ posts: normalize(items) }));
}

export function getMenu() {
  return getClient().getEntries({
    content_type: POST_CONTENT_TYPE,
    select: 'fields.slug,fields.title',
  })
  .then(({ items }) => ({ posts: normalize(items) }));
}
