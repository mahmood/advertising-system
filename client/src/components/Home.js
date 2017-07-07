import React, {Component} from 'react';
import {Grid, Card, Icon, Image, Segment} from 'semantic-ui-react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from './common/Header';
import PandaImage from '../images/panda.jpg';
import SideMenu from './common/SideMenu';
import ProductItem from './ProductItem';

class Home extends Component {
  stickyMenu(style) {
    style = {...style, top: '10px'};
    let items = [
      { name: 'املاک', slug: 'home' },
      { name: 'خودرو', slug: 'car' },
      { name: 'لوازم الکترونیکی', slug: 'electric' },
      { name: 'استخدام', slug: 'employment' }
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
        <Header/>
        <StickyContainer className="rtl">
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