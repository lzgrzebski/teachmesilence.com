import settings from './settings';

let ga;

export default () => {
  if (ga) return ga;

  window.ga = window.ga || (() => { (window.ga.q = window.ga.q || []).push(arguments); });
  window.hj = window.hj || (() => { (window.hj.q = window.hj.q || []).push(arguments); });
  window._hjSettings = { hjid: 565384, hjsv: 5 }; //eslint-disable-line
  ga = window.ga;
  ga.l = +new Date();
  ga('create', settings.googleAnalyticsId, 'auto');
  return ga;
};
