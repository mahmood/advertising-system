import React, { Component } from 'react';
import Layout from '../components/layouts/Home';

class Browse extends Component {
  render() {
    return (
      <Layout>
        <div>
          {console.log(this.props)}
          {this.props.match.params.slug}
        </div>
      </Layout>
    );
  }
}

export default Browse;