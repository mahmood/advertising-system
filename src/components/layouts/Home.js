import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';

class Home extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header/>
        <div className="rtl margin">
          {children}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node
};

export default Home;