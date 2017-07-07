import React, {Component} from 'react';
import {Grid, Card, Icon, Image, Segment} from 'semantic-ui-react';
import Header from './common/Header';
import PandaImage from '../images/panda.jpg';
import SideMenu from './common/SideMenu';
import ProductItem from './ProductItem';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="rtl">
          <Grid container>
            <Grid.Row>
              <Grid.Column computer={3}>
                <SideMenu />
              </Grid.Column>
              <Grid.Column computer={13}>
                <Grid>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;