import React, {Component} from 'react';
import {Grid, Card, Icon, Image, Segment} from 'semantic-ui-react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from './common/Header';
import PandaImage from '../images/panda.jpg';
import SideMenu from './common/SideMenu';
import ProductItem from './ProductItem';
import {Helmet} from 'react-helmet';

class Home extends Component {
  stickyMenu(style) {
    style = {...style, top: '10px'};
    let items = [
      { id: 1, name: 'املاک', slug: 'home' },
      { id: 2, name: 'خودرو', slug: 'car' },
      { id: 3, name: 'لوازم الکترونیکی', slug: 'electric' },
      { id: 4, name: 'استخدام', slug: 'employment' }
    ];
    return (
      <div style={style}>
        <SideMenu items={items} />
      </div>
    )
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>دیوار - خانه</title>
        </Helmet>
        <Header/>
        <StickyContainer className="rtl margin">
          <Grid container>
            <Grid.Row>
              <Grid.Column computer={3}>
               <Sticky>
                  {({style}) =>this.stickyMenu(style)}
                </Sticky>
              </Grid.Column>
              <Grid.Column computer={13}>
                <Grid>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                  <ProductItem image={PandaImage}/>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </StickyContainer>
      </div>
    );
  }
}

export default Home;