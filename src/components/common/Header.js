import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu, Header, Modal } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import LoginModal from './Modal/LoginModal';
import RegisterModal from './Modal/RegisterModal';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick = () => {
    this.props.logOut();
  }

  renderMenu = () => (
    <Menu.Menu position="left">
      <div className="inline-login">
        <LoginModal />
        <RegisterModal />
      </div>
    </Menu.Menu> 
  )

  renderUserInfo = (fname, lname) => (
    <Menu.Menu position="left">
      <Dropdown item text={fname}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={this.handleLogoutClick}>خروج</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {this.renderAdd()}
    </Menu.Menu>
  )

  renderAdd = () => (
    <Menu.Item>
      <Link className="ui red button" to="/new">+ ثبت رایگان آگهی</Link>
    </Menu.Item>
  )

  render() {
    const { auth } = this.props;
    return (
      <Menu size='massive' className="no-radius">
        <div className="logo"><Link to="/">دیوار</Link></div>
        <Link className="item" to="/">خانه</Link>
        <Link className="item" to="/about">درباره ما</Link>
        <Link className="item" to="/admin">پنل مدیریت</Link>
          { auth.loggedIn ? this.renderUserInfo(auth.data.fname, auth.data.lname) : this.renderMenu() }
      </Menu>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(HeaderComponent);