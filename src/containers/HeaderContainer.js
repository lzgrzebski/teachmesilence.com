import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { fetchMenu } from '../store/posts/actions';
import { getMenuLinks } from '../store/posts/reducer';


class HeaderContainer extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    activePost: PropTypes.bool,
    isMenuOpen: PropTypes.bool.isRequired,
    fetchMenu: PropTypes.func.isRequired,
  }

  showMenuLinks() {
    return this.props.links.map(({ slug, title }) => <Link key={`link-${slug}`} prefetch href={`/post?slug=${slug}`} as={`/post/${slug}/`} ><a>{title}</a></Link>);
  }

  handleClick = () => {
    this.props.fetchMenu();
  }

  render() {
    return (
      <header>
        <button onClick={this.handleClick}>Menu</button>
        {this.props.isMenuOpen && this.showMenuLinks()}
      </header>
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
