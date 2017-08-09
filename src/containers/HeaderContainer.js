import _throttle from 'lodash.throttle';
import _raf from 'raf';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import settings from '../services/settings';
import oneSignal from '../services/onesignal';
import ga from '../services/ga';

import { fetchMenu } from '../store/posts/actions';
import { headerUpdateState, notifyStatus } from '../store/header/actions';
import { clickTracking } from '../store/user/actions';

import { getMenuLinks } from '../store/posts/reducer';

import Header from '../components/Header';

class HeaderContainer extends Component {

  render() {
    return (
        <div>asd</div>
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

export default connect(
  mapStateToProps, { fetchMenu, headerUpdateState, notifyStatus, clickTracking },
)(HeaderContainer);
