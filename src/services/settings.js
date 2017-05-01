const UNIT = 33.18;

const settings = {
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

  imageSizes: [360, 375, 768, 1049, 1050],
  coverPhotoSizes: [768, 1050, 1300, 1979, 1980],
  coverPhotoMobileSizes: [360, 375, 767, 768],

  mobileCoverPhotoWidth: 767,
  mobilCoverPhotoHeight: 800,

};

settings.breakpoints = {
  mobile: settings.imageSizes[0],
  mobileBigger: settings.imageSizes[1],
  tablet: settings.imageSizes[2],
  desktop: 980,
  wide: 1300,
  end: 1980,
};

export default settings;
