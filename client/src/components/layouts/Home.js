import React, { Component } from 'react';
// import { Grid } from 'semantic-ui-react';
import Header from '../common/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="rtl margin">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Home;