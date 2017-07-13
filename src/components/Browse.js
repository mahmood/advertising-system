import React, { Component } from 'react';
import Layout from '../components/layouts/Home';
import { StickyContainer, Sticky } from 'react-sticky';
import {Grid, Card, Icon, Image, Segment, Dimmer, Loader} from 'semantic-ui-react';
import PandaImage from '../images/panda.jpg';
import SideMenu from './common/SideMenu';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions';

class Browse extends Component {
  stickyMenu(style) {
    style = {...style, top: '10px'};
    return (
      <div style={style}>
        <SideMenu items={this.props.categories} />
      </div>
    )
  }
  componentDidMount() {
    this.props.fetchProducts(this.props.match.params.id);
    this.props.fetchCategories();
  }
  // when url changed we dispatch action again to receive new data
  componentWillReceiveProps(nextProps) {
    if(this.props.match.url !== nextProps.match.url){
      this.props.fetchProducts(nextProps.match.params.id)
    }
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
                <Dimmer active={this.props.isLoading} inverted>
                  <Loader size="large" inverted content='درحال بارگذاری' />
                </Dimmer>
                {this.props.products && this.props.products.map(product => <ProductItem key={product.id} {...product}/>)}
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

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.product.data,
    isLoading: state.product.isLoading,
    categories: state.product.cat
  }
}

export default connect(mapStateToProps, actions)(Browse);