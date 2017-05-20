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
          margin={props.margin === '0' ? '0' : settings.spacingUnit}
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
  margin: PropTypes.string.isRequired,
};

CoverPhoto.defaultProps = {
  margin: settings.spacingUnit,
};
