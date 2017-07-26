import React, { Component } from 'react';
import Layout from '../../components/layouts/Home';
import { StickyContainer, Sticky } from 'react-sticky';
import { Grid, Card, Icon, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import SideMenu from '../common/SideMenu';
import SearchField from '../common/SearchField';
import ProductItem from '../common/ProductItem';
import { connect } from 'react-redux';
import * as actions from '../../actions/productActions';

class Browse extends Component {
  stickyMenu(style) {
    const { categories } = this.props;
    style = {...style, top: '10px'};
    return (
      <div style={style}>
        <SideMenu items={categories} />
      </div>
    )
  }
  componentDidMount() {
    const { fetchCategories, fetchProducts, match } = this.props;
    fetchProducts(match.params.id);
    fetchCategories();
  }
  // when url changed we dispatch action again to receive new data
  componentWillReceiveProps(nextProps) {
    const { match, fetchProducts } = this.props;
    if(match.url !== nextProps.match.url){
      fetchProducts(nextProps.match.params.id);
    }
  }
  render() {
    const {
      categories,
      currentCat,
      products,
      isLoading
    } = this.props;
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
                <SearchField categories={categories} currentCat={currentCat} />
                {currentCat && <span className="search_term">{currentCat[0].name}</span>}
                <Grid>
                  <Dimmer active={isLoading} inverted>
                    <Loader size="large" inverted content='درحال بارگذاری' />
                  </Dimmer>
                  {products && products.map(product => <ProductItem key={product.id} {...product}/>)}
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
  const { data, isLoading, cat, currentCat } = state.product;
  return {
    products: data,
    isLoading: isLoading,
    categories: cat,
    currentCat: currentCat
  }
}

export default connect(mapStateToProps, actions)(Browse);