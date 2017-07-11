import React, { Component } from 'react';
import Layout from '../components/layouts/Home';
import { Helmet } from 'react-helmet';

class Header extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>دیوار - افزودن آگهی</title>
        </Helmet>
        <div>
          افزودن آگهی
        </div>
      </Layout>
    );
  }
}

export default Header;