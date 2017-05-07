import React from 'react';
import PropTypes from 'prop-types';
import settings from '../../services/settings';

import MobileWrapper from './MobileWrapper';
import DesktopWrapper from './DesktopWrapper';
import Photo from '../Photo';


export default function CoverPhoto(props) {
  return (
    <div>
      <MobileWrapper>
        <Photo
          {...props}
          width={settings.mobileCoverPhotoWidth}
          height={settings.mobilCoverPhotoHeight}
          imgType="coverPhotoMobileSizes"
          thumb
        />
      </MobileWrapper>
      <DesktopWrapper>
        <Photo
          {...props}
          imgType="coverPhotoSizes"
        />
      </DesktopWrapper>
    </div>
  );
}

CoverPhoto.propTypes = {
  url: PropTypes.string.isRequired,
};
