import settings from './settings';

let ga;

export default () => {
  if (ga) return ga;

  window.ga = window.ga || (() => { (window.ga.q = window.ga.q || []).push(arguments); });
  ga = window.ga;
  ga.l = +new Date();
  ga('create', settings.googleAnalyticsId, 'auto');
  return ga;
};
