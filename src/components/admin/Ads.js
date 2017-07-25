import React, { Component } from 'react';
import Layout from '../layouts/Admin';
import { Button, Table, Icon } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as actions from '../../actions/adminAdsActions';
import AdsItem from './AdsItem';

class Ads extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <Layout>
        <Helmet>
          <title>پنل مدیریت - آگهی ها</title>
        </Helmet>
        <section className="product__inner">
          <h2><Icon name="computer" size="small"></Icon> آگهی ها</h2>
          <Button primary>افزودن آگهی</Button>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ردیف</Table.HeaderCell>
                <Table.HeaderCell>نام آگهی</Table.HeaderCell>
                <Table.HeaderCell>وضعیت</Table.HeaderCell>
                <Table.HeaderCell>نوع فروش</Table.HeaderCell>
                <Table.HeaderCell>قیمت</Table.HeaderCell>
                <Table.HeaderCell>تاریخ ثبت</Table.HeaderCell>
                <Table.HeaderCell>دسته‌بندی</Table.HeaderCell>
                <Table.HeaderCell width="four">توضیحات</Table.HeaderCell>
                <Table.HeaderCell width="three">عملیات</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {this.props.ads && this.props.ads.map((ad, index) => <AdsItem key={ad.id} index={index} {...ad} deleteProduct={this.props.deleteProduct} verifyProduct={this.props.verifyProduct}/>)}
          </Table.Body>
          </Table>
        </section>
        </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ads: state.ads.data
  }
}

export default connect(mapStateToProps, actions)(Ads);