import React, { Component } from 'react';
import Layout from '../layouts/Home';
import { Grid, Button, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'jalali-moment';
import { PersianNumber } from 'react-persian';
import Helmet from 'react-helmet';
import { FetchSingleProduct } from '../../actions/productActions';

class AdsItem extends Component {
  constructor(props) {
    super(props);
    this.renderType = this.renderType.bind(this);
  }
  componentDidMount() {
    const { FetchSingleProduct, match } = this.props;
    FetchSingleProduct(match.params.id);
  }
  renderType(type) {
    if(type == 'normal') {
      return 'فروشی';
    }else if(type == 'free') {
      return 'رایگان';
    }else if(type == 'adaptive') {
      return 'توافقی'
    }
  }
  render() {
    const {
      name,
      price,
      price_type,
      description,
      image,
      category,
      isLoading,
      created_at
    } = this.props.product;
    return (
      <Layout>
        <Helmet>
          <title>دیوار - مشخصات آگهی</title>
        </Helmet>
        <Grid container className="adsSingle">
          <Grid.Row>
            <Dimmer active={isLoading} inverted>
              <Loader size="large" inverted content='درحال بارگذاری' />
            </Dimmer>
            <Grid.Column computer="7" mobile="16">
              <h2>{name}</h2>
              <div className="adsSingle__date"><PersianNumber>{moment(created_at, "YYYY-MM-DD h:m:s").fromNow()}</PersianNumber></div>
              <Button color="green" className="normal">تماس با فروشنده</Button>
              <Button color="yellow" className="normal">نشان کردن</Button>            
              <Button color="blue" className="normal">اشتراک گذاری</Button>
              <ul className="adsSingle__property">
                <li>دسته بندی <span>{category}</span> </li>            
                <li>قیمت <span><PersianNumber>{price} تومان</PersianNumber></span></li>
                <li>نوع <span>{this.renderType(price_type)}</span></li>
              </ul>
              <div className="adsSingle__description">{description}</div>
            </Grid.Column>
            <Grid.Column computer="2"></Grid.Column>
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