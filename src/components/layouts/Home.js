import React, { Component } from 'react';
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

export default Home;