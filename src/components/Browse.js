import React, { Component } from 'react';
import Layout from '../components/layouts/Home';
import { StickyContainer, Sticky } from 'react-sticky';
import {Grid, Card, Icon, Image, Segment} from 'semantic-ui-react';
import PandaImage from '../images/panda.jpg';
import SideMenu from './common/SideMenu';
import ProductItem from './ProductItem';

class Browse extends Component {
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
      <Layout>
        <div>
        <StickyContainer className="rtl">
          <Grid container>
            <Grid.Row>
              <Grid.Column computer={3}>
                <Sticky>
                  {({style}) =>this.stickyMenu(style)}
                </Sticky>
              </Grid.Column>
              <Grid.Column computer={13}>
              {this.props.match.params.slug}
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

      </Layout>
    );
  }
}

export default Browse;