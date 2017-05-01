import { injectGlobal } from 'styled-components';

import boxSizing from './generic/boxSizing';
import normalize from './generic/normalize';
import reset from './generic/reset';

import page from './elements/page';
import fonts from './elements/fonts';
import images from './elements/images';
import links from './elements/links';
import lazy from './elements/lazy';

export default injectGlobal`

  /* GENERIC */
  ${boxSizing}
  ${normalize}
  ${reset} 

  /* ELEMENTS */
  ${page}
  ${fonts}
  ${images} 
  ${links}
  ${lazy}

`;
