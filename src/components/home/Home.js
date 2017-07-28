import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import Header from '../common/Header';
import SideMenu from '../common/SideMenu';
import ProductItem from '../common/ProductItem';
import NotFound from './NotFound';
import SearchField from '../common/SearchField';
import { StickyContainer, Sticky } from 'react-sticky';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import * as actions from '../../actions/productActions';

class Home extends Component {
  stickyMenu(style) {
    const { categories } = this.props;
    style = Object.assign({}, style, { top: '10px' });
    return (
      <div style={style}>
        <SideMenu items={categories} />
      </div>
    )
  }
  componentDidMount() {
    const { fetchCategories, fetchProducts } = this.props;
    fetchProducts();
    fetchCategories();
  }
  render() {
    const {
      isLoading,
      categories,
      products,
      fetchCategories,
      fetchProducts
    } = this.props;
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
              <SearchField categories={categories} />
                <Grid>
                  <Dimmer active={isLoading} inverted>
                    <Loader size="large" inverted content='درحال بارگذاری' />
                  </Dimmer>
                  {products && products.map(product => <ProductItem key={product.id} {...product}/>)}
                  {isLoading == false && products.length == 0 && <NotFound />}
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
  const { data, isLoading, cat } = state.product;
  return {
    products: data,
    isLoading: isLoading,
    categories: cat
  }
}

Home.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  categories: PropTypes.array,
  fetchProducts: PropTypes.func,
  fetchCategories: PropTypes.func
};

export default connect(mapStateToProps, actions)(Home);
