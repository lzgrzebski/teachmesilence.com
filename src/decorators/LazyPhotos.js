import _debounce from 'lodash.debounce';
import React, { Component } from 'react';
import Blazy from 'blazy';
import settings from '../services/settings';
import { calculateOffset } from '../services/helpers';

export default WrappedComponent => (

  class extends Component {

    handleResize = _debounce(() => {
      const notRenderedImages = document.querySelectorAll(`${settings.lazySelector}:not(.${settings.lazySuccessClass})`);
      if (notRenderedImages.length > 0) {
        this.lazy.revalidate();
      }
    }, 400, { leading: false, trailing: true })

    componentDidMount() {
      this.lazy = new Blazy({
        offset: calculateOffset(),
        selector: settings.lazySelector,
        successClass: settings.lazySuccessClass,
        success: e => e.parentNode.classList.add(settings.lazyPictureElemClass),
      });

      if(window && this.handleResize) {
        window.addEventListener('resize', this.handleResize);
      }
    }

    componentWillUnmount() {
      if(window && this.handleResize) {
        window.removeEventListener('resize', this.handleResize);
      }
    }

    componentDidUpdate() {
      this.lazy.revalidate();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

);
