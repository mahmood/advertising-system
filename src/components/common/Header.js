import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu, Header, Modal } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';
import LoginModal from './Modal/LoginModal';
import RegisterModal from './Modal/RegisterModal';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class HeaderComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogoutClick = () => {
    this.props.logOut();
  }

  render() {
    const { activeItem } = this.state;
    const userInfo = (fname, lname) => (
      <Dropdown item text={fname}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.handleLogoutClick.bind(this)}>خروج</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    );
    return (
      <Menu size='massive' className="no-radius">
        <div className="logo"><Link to="/">دیوار</Link></div>
        <Link className="item" to="/">خانه</Link>
        <Link className="item" to="/about">درباره ما</Link>
        <Menu.Menu position='left'>
          {this.props.auth.loggedIn ? userInfo(this.props.auth.data.fname, this.props.auth.data.lname) : <div className="inline-login"><LoginModal /><RegisterModal /></div> }
          <Menu.Item>
            <Link className="ui red button" to="/new">+ ثبت رایگان آگهی</Link>
          </Menu.Item>
        </Menu.Menu>
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