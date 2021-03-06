// TODO add JSDOC to all the helper method and move them to the separated files aferwards
import { css } from 'styled-components';
import settings from './settings';

function stripUnit(value) {
  const unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

export function imgPadding(width, height) {
  const ratio = width / height;
  return (100 / ratio);
}

export function imgRatio(width, height) {
  return (height / width).toFixed(2);
}

export function imgHeight(width, ratio) {
  return parseInt(width * ratio, 10);
}

export function fontWeight(weight) {
  if (weight === 'bold') {
    return 'font-weight: 700';
  }
  return 'font-weight: 400';
}

export function pxTo(px, unit = 'rem', base = settings.fontSize) {
  const stripped = stripUnit(px);
  const strippedBase = stripUnit(base);
  return `${(stripped / strippedBase).toFixed(2)}${unit}`;
}

export function lineHeight(lineHeightSize = settings.lineHeight, fontSizePx = settings.fontSize) {
  const strippedLineHeight = stripUnit(lineHeightSize);
  const strippedFontSize = stripUnit(fontSizePx);
  return (strippedLineHeight / strippedFontSize).toFixed(2);
}

export function fontSize(px) {
  return css`
    font-size: ${px};
    font-size: ${pxTo(px)};
  `;
}

export function from(breakpoint) {
  const breakpointPx = settings.breakpoints[breakpoint];
  const ems = breakpointPx / 16;
  return (...args) => css`@media (min-width: ${ems}em) {
    ${args}
  }`;
}

export function until(breakpoint) {
  const breakpointPx = settings.breakpoints[breakpoint] - 1;
  const ems = breakpointPx / 16;
  return (...args) => css`@media (max-width: ${ems}em) {
    ${args}
  }`;
}

function imageUrl(url, width, height, thumb) {
  let endUrl = `${url}?fm=jpg&fl=progressive&w=${width}&q=${settings.imageQuality}`;
  if (height) endUrl += `&h=${height}`;
  if (thumb) endUrl += '&fit=thumb';

  return endUrl;
}

export function imgSrcSet(url, width, height, thumb = false) {
  return `${imageUrl(url, width, height, thumb)}|${imageUrl(url, width * 2, height * 2, thumb)}`;
}

export function sourceSrcSet(url, width, height, thumb = false) {
  return `${imageUrl(url, width, height, thumb)}, ${imageUrl(url, width * 2, height * 2, thumb)} 2x`;
}

export function unique(id, i) {
  return `${id}-${i}`;
}


/**
 * Checking if scroll reach bottom of the page
 *
 * @return {bool} true if scroll in the bottom
 */
export function shouldLoadPosts(offset = settings.infiniteScrollOffset) {
  const wrap = document.getElementsByTagName('body')[0];
  const contentHeight = wrap.offsetHeight;
  const yOffset = window.pageYOffset;
  const y = yOffset + window.innerHeight + offset;
  return y >= contentHeight;
}

export function getAbsoluteUrl(slug) {
  if (!slug) return `${settings.siteUrl}/`;
  return `${settings.siteUrl}/post/${slug}/`;
}

export function getFbShareUrl(slug) {
  return settings.fbShareUrl + getAbsoluteUrl(slug);
}

export function getFbCountUrl(slug) {
  return settings.fbCountUrl + getAbsoluteUrl(slug);
}

export function windowOpen(url) {
  return window.open(url, 'tms-share', 'status = 1, height = 500, width = 555, resizable = 0');
}

export function calculateOffset() {
  if (window) {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w < settings.imageSizes[2]) {
      return settings.lazyOffsetMobile; // smaller offset for mobile devices
    }
  }

  return settings.lazyOffset;
}
