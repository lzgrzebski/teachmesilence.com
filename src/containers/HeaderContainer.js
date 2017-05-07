import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMenu } from '../store/posts/actions';
import { getMenuLinks } from '../store/posts/reducer';

import Header from '../components/Header';


class HeaderContainer extends Component {
  static propTypes = {
    fetchMenu: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    document.documentElement.classList.toggle('is-menu-open', this.props.isMenuOpen);
  }
  componentWillReceiveProps(nextProps) {
    document.documentElement.classList.toggle('is-menu-open', nextProps.isMenuOpen);
  }
  componentWillUnmount() {
    document.documentElement.classList.remove('is-menu-open');
  }

  handleClick = () => {
    this.props.fetchMenu();
  }

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
    isMenuOpen: state.store.isMenuOpen,
  };
}

export default connect(mapStateToProps, { fetchMenu })(HeaderContainer);
