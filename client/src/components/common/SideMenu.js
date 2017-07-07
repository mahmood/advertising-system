import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideMenu extends Component {
  render() {
    return (
      <aside className="sideMenu">
        <div className="menu">
          <ul>
            {this.props.items.map(item => {
              return (
                <li>
                  <Link to={'/browse/'+item.slug}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideMenu;