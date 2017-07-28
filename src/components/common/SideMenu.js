import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class SideMenu extends Component {
  render() {
    const { items } = this.props;
    return (
      <aside className="sideMenu">
        <div className="menu">
          <ul>
            {items && items.map(({id, name, slug}) => {
              return (
                <li key={id}>
                  <Link to={`/browse/${slug}/${id}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    );
  }
}

SideMenu.propTypes = {
  items: PropTypes.array
};

export default SideMenu;