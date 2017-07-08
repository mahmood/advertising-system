import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu, Header, Modal } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import LoginModal from './Modal/LoginModal';
import RegisterModal from './Modal/RegisterModal';

class HeaderComponent extends Component {
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
          <LoginModal />
          <RegisterModal />  
          <Menu.Item>
            <Link className="ui red button" to="/new">+ ثبت رایگان آگهی</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderComponent;