import settings from './settings';

let ga;

export default () => {
  if (ga) return window.ga;

  // hacky snippet ga + hotjar
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
  
    setTimeout(()=> {
      a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      if(!window.hj){
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:565384,hjsv:5};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
      }
    }, 0)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  /* eslint-enable */

  ga = window.ga;
  ga('create', settings.googleAnalyticsId, 'auto');
  return window.ga;
};
