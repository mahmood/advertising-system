import React, { Component } from 'react';
import { Icon, Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Layout from '../../layouts/Admin';
import { fetchUsers } from '../../../actions/adminUsersActions';
import UsersItem from './UsersItem';
import { connect } from 'react-redux';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const {
      users
    } = this.props;
    return (
      <Layout>
        <Helmet>
          <title>دیوار - کاربران</title>
        </Helmet>
        <section className="product__inner">
        <h2><Icon name="users" size="small"></Icon> کاربران</h2>
        {/*<Link to="/admin/users/add"><Button primary>افزودن کاربر</Button></Link>*/}
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ردیف</Table.HeaderCell>
              <Table.HeaderCell>نام و نام خانوادگی</Table.HeaderCell>
              <Table.HeaderCell>ایمیل</Table.HeaderCell>
              <Table.HeaderCell>شماره تماس</Table.HeaderCell>
              <Table.HeaderCell>تاریخ عضویت</Table.HeaderCell>
              <Table.HeaderCell>سمت</Table.HeaderCell>              
              <Table.HeaderCell>عملیات</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {users && users.map((user, index) => 
            <UsersItem key={user.id}
              index={index}
              {...user}
            />)}
        </Table.Body>
        </Table>
      </section>
      </Layout>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.data
  }
}
export default connect(mapStateToProps, { fetchUsers })(Users);