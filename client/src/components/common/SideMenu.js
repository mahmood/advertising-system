import React, {Component} from 'react';

class SideMenu extends Component {
  render() {
    return (
      <aside className="sideMenu">
        <div className="menu">
          <ul>
            <li className="active">
              <a href="#">همه آگهی ها</a>
            </li>
            <li>
              <a href="#">خودرو</a>
            </li>
            <li>
              <a href="#">استخدام</a>
            </li>
            <li>
              <a href="#">املاک</a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideMenu;