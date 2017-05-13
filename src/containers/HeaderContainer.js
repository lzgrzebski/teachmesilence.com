import _debounce from 'lodash.debounce';
import _raf from 'raf';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    document.documentElement.classList.toggle('is-menu-open', this.props.isMenuOpen);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillReceiveProps(nextProps) {
    document.documentElement.classList.toggle('is-menu-open', nextProps.isMenuOpen);
  }
  componentWillUnmount() {
    document.documentElement.classList.remove('is-menu-open');
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

  handleScroll = _debounce(() => {
    this.currentScrollPosition = document && document.body.scrollTop;
    this.headerState();
    this.lastKnownScrollPosition = this.currentScrollPosition;
  })

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
