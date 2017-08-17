import React, { Component } from 'react';
import { Icon, Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Layout from '../../layouts/Admin';
import * as actions from '../../../actions/adminCatsActions';
import CatsItem from './CatsItem';
import { connect } from 'react-redux';

class Category extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const {
      cat,
      deleteCategory
    } = this.props;
    return (
      <Layout>
        <Helmet>
          <title>دیوار - دسته بندی</title>
        </Helmet>
        <section className="product__inner">
        <h2><Icon name="sitemap" size="small"></Icon> دسته بندی</h2>
        <Link to="/admin/category/add"><Button primary>افزودن دسته بندی</Button></Link>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ردیف</Table.HeaderCell>
              <Table.HeaderCell>نام دسته بندی</Table.HeaderCell>
              <Table.HeaderCell>نام لاتین</Table.HeaderCell>
              <Table.HeaderCell>تاریخ</Table.HeaderCell>
              <Table.HeaderCell>عملیات</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {cat && cat.map((cat, index) => 
            <CatsItem key={cat.id}
              deleteCategory={deleteCategory}
              index={index}
              {...cat}
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
    cat: state.cat.data
  }
}
export default connect(mapStateToProps, actions)(Category);