const UNIT = 33.18;

const settings = {
  siteUrl: 'https://www.teachmesilence.com',
  siteTitle: 'teachmesilence.com - blog',
  siteDescription: 'Quiet, boring analog photographs.',
  siteImage: 'https://images.contentful.com/k3oz0f9ubslk/56vvkMBB4Akaw00muEMQ0I/f4466eb5c20f14cc8d924513cf6b43a9/1.jpg',
  siteAuthor: 'Łukasz Zgrzebski',
  instagramUrl: 'https://www.instagram.com/teachmesilence_/',
  linkedinUrl: 'https://www.linkedin.com/in/lukasz-zgrzebski/',
  githubUrl: 'https://github.com/lzgrzebski/',

  googleAnalyticsId: 'UA-99654481-1',
  oneSignalId: '5730a570-9af7-410f-9d95-5a8760a731c2',
  oneSignalSafariId: 'web.onesignal.auto.1de7b938-6047-48aa-bcdd-0245aac21a82',

  person: 'person',
  people: 'people',
  sharedText: 'shared with love',
  fbShareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
  fbCountUrl: 'https://graph.facebook.com/?id=',

  notifyBoxTitle: 'If you like this blog, let\'s keep in  touch!',
  notifyBoxBtnPush: 'Enable notifications',
  notifyBoxBtnInstagram: 'Follow me on instagram', // too long for mobile

  footerText: 'made by',

  fontSize: '18px',
  lineHeight: `${UNIT}px`,

  colorLinks: '#ff5a5f',
  colorBase: 'rgba(0,0,0,.8)',
  backgroundBase: '#ffffff',
  backgroundPhotoPlaceholder: '#e1e1e1',

  spacingUnit: `${UNIT}px`,
  spacingUnitTiny: `${Math.round(UNIT / 4)}px`,
  spacingUnitSmall: `${Math.round(UNIT / 2)}px`,
  spacingUnitLarge: `${Math.round(UNIT * 2)}px`,
  spacingUnitHuge: `${Math.round(UNIT * 4)}px`,
  spacingCover: '45px',

  imageQuality: 85,
  imageSizes: [360, 375, 768, 1049, 1050],
  coverPhotoSizes: [768, 1050, 1300, 1919, 1920],
  coverPhotoMobileSizes: [360, 375, 692, 693],

  mobileCoverPhotoWidth: 1536,
  mobilCoverPhotoHeight: 1600,

  buttonWidth: 55,
  buttonHeight: 55,
  barThickness: 2,
  buttonPad: 10,
  buttonBarSpace: 10,

  pinnedColor: '#666',
  unpinnedColor: '#fff',

  isMenuOpenClassName: 'is-menu-open',

  lazyClassName: 'lazy',
  lazySelector: '.lazy',
  lazySuccessClass: 'lazy--loaded',
  lazyOffset: 2000,
  lazyOffsetMobile: 1000,
  lazyPictureElemClass: 'picture--loaded',

  infiniteScrollOffset: 1500,

};

settings.breakpoints = {
  mobile: settings.imageSizes[0],
  mobileBigger: settings.imageSizes[1],
  tablet: settings.imageSizes[2],
  desktop: 980,
  desktopFull: 1050,
  wide: 1300,
  end: 1980,
};

export default settings;
