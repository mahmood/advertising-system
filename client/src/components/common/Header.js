import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu size='massive' className="no-radius">
        <div className="logo"><Link to="/">دیوار</Link></div>
        <Link className="item" to="/">خانه</Link>
        <Link className="item" to="/about">درباره ما</Link>

        <Menu.Menu position='left'>
          {/*<Dropdown item text='زبان'>
            <Dropdown.Menu>
              <Dropdown.Item>انگلیسی</Dropdown.Item>
              <Dropdown.Item>روسی</Dropdown.Item>
              <Dropdown.Item>اسپانیایی</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>*/}

          <Menu.Item>
              <Link className="ui red button" to="/new">+ ثبت رایگان آگهی</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;