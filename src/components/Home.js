import React, {Component} from 'react';
import { Grid, Card, Icon, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from './common/Header';
import SideMenu from './common/SideMenu';
import ProductItem from './ProductItem';
import { Helmet } from 'react-helmet';
import SearchField from './common/SearchField';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions';

class Home extends Component {
  stickyMenu(style) {
    style = {...style, top: '10px'};
    return (
      <div style={style}>
        <SideMenu items={this.props.categories} />
      </div>
    )
  }
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
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
                  {({style}) => this.stickyMenu(style)}
                </Sticky>
              </Grid.Column>
              <Grid.Column computer={13}>
              <SearchField categories={this.props.categories} />
                <Grid>
                  <Dimmer active={this.props.isLoading} inverted>
                    <Loader size="large" inverted content='درحال بارگذاری' />
                  </Dimmer>
                  {this.props.products && this.props.products.map(product => <ProductItem key={product.id} {...product}/>)}
                  {this.props.isLoading == false && this.props.products.length == 0 && <div className="not-found"><div><Icon name="frown" size="massive"/></div> یافت نشد.</div>}
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </StickyContainer>
      </div>
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

export default connect(mapStateToProps, actions)(Home);