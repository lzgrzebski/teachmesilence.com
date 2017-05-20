import _throttle from 'lodash.throttle';
import _raf from 'raf';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import settings from '../services/settings';

import { fetchMenu } from '../store/posts/actions';
import { headerUpdateState } from '../store/header/actions';
import { getMenuLinks } from '../store/posts/reducer';

import Header from '../components/Header';

class HeaderContainer extends Component {
  static propTypes = {
    fetchMenu: PropTypes.func.isRequired,
    headerUpdateState: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    isFixed: PropTypes.bool.isRequired,
    isPinned: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    document.documentElement.classList.toggle(settings.isMenuOpenClassName, this.props.isMenuOpen);
    window.addEventListener('scroll', this.handleScroll);
    const OneSignal = window.OneSignal || [];
    if (OneSignal.length === 0) {
      OneSignal.push(['init', {
        appId: '5730a570-9af7-410f-9d95-5a8760a731c2',
        autoRegister: false,
        notifyButton: {
          enable: true, /* Set to false to hide */
        },
      }]);
    }
  }
  componentWillReceiveProps(nextProps) {
    document.documentElement.classList.toggle(settings.isMenuOpenClassName, nextProps.isMenuOpen);
  }
  componentWillUnmount() {
    document.documentElement.classList.remove(settings.isMenuOpenClassName);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    this.props.fetchMenu();
  }
  // TODO: use validators instead of many ifs
  headerState() {
    const isScrollingDown = this.currentScrollPosition >= this.lastKnownScrollPosition;
    const distance = Math.abs(this.currentScrollPosition - this.lastKnownScrollPosition);
    const headerHeight = 70;
    const headerOffset = 0;
    const upTolerance = 20;
    const positionAfterHeader = window.pageYOffset > headerHeight + headerOffset;

    let shouldUpdateFixed;
    let shouldUpdatePinned;

    if (positionAfterHeader && !isScrollingDown && !this.props.isPinned && distance > upTolerance) {
      shouldUpdatePinned = true;
    }

    if (positionAfterHeader && isScrollingDown && this.props.isPinned && distance > upTolerance) {
      shouldUpdatePinned = true;
    }

    if (window.pageYOffset === 0 && this.props.isFixed) {
      shouldUpdateFixed = true;
    }

    if (window.pageYOffset === 0 && this.props.isPinned) {
      shouldUpdatePinned = true;
    }

    if (positionAfterHeader && !this.props.isFixed) {
      shouldUpdateFixed = true;
    }

    if (shouldUpdateFixed || shouldUpdatePinned) {
      _raf(() => this.props.headerUpdateState({
        isPinned: shouldUpdatePinned ? !this.props.isPinned : this.props.isPinned,
        isFixed: shouldUpdateFixed ? !this.props.isFixed : this.props.isFixed,
      }));
    }
  }

  handleScroll = _throttle(() => {
    this.currentScrollPosition = document && document.body.scrollTop;
    this.headerState();
    this.lastKnownScrollPosition = this.currentScrollPosition;
  }, 200)

  render() {
    return (
      <Header {...this.props} handleClick={this.handleClick} />
    );
  }
}

function mapStateToProps(state) {
  return {
    links: getMenuLinks(state),
    activePost: state.store.activePost,
    isMenuOpen: state.header.isMenuOpen,
    isFixed: state.header.isFixed,
    isPinned: state.header.isPinned,
  };
}

export default connect(mapStateToProps, { fetchMenu, headerUpdateState })(HeaderContainer);
