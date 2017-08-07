import React, { Component } from 'react';
import Layout from '../layouts/Home';
import { Grid, Button, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { FetchSingleProduct } from '../../actions/productActions';

class AdsItem extends Component {
  componentDidMount() {
    const { FetchSingleProduct, match } = this.props;
    FetchSingleProduct(match.params.id);
  }
  render() {
    const {
      name,
      price,
      price_type,
      description,
      image,
      category,
      isLoading
    } = this.props.product;
    return (
      <Layout>
        <Grid container>
          <Grid.Row>
            <Dimmer active={isLoading} inverted>
              <Loader size="large" inverted content='درحال بارگذاری' />
            </Dimmer>
            <Grid.Column computer="9" mobile="16">
              <h2>{name}</h2>
              <Button color="green">تماس با فروشنده</Button>
              <Button color="yellow">نشان کردن</Button>            
              <Button color="blue">اشتراک گذاری</Button>
              <ul>
                <li>دسته بندی {category} </li>            
                <li>قیمت : {price} تومان</li>
                <li>نوع فروش : {price_type}</li>
                <li>{description} </li>
              </ul>
            </Grid.Column>
            <Grid.Column computer="7" mobile="16">
              <img src={`http://localhost:3333/uploads/${image}`}></img>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product.data[0]
  }
}

export default connect(mapStateToProps, {FetchSingleProduct})(AdsItem);