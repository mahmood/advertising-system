import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './common/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="rtl">
          <Grid>
            <Grid.Column computer={3} mobile={10}>
              salam
            </Grid.Column>
            <Grid.Column>
              salam2
            </Grid.Column>
            <Grid.Column>
              salam3
            </Grid.Column>
            <Grid.Column>
              salam4
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;