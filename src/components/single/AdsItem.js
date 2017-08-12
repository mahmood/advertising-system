import React, { Component } from 'react';
import Layout from '../layouts/Home';
import { Grid, Button, Dimmer, Loader, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'jalali-moment';
import { PersianNumber } from 'react-persian';
import Helmet from 'react-helmet';
import { FetchSingleProduct } from '../../actions/productActions';
import { Link } from 'react-router-dom';

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
    const { pathname } = this.props.location;
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
              <Dropdown text='اشتراک گذاری' icon='external share' floating labeled button className='icon blue'>
              <Dropdown.Menu icon="filter">
                <Dropdown.Item icon="telegram" text={<a target="_blank" href={`https://telegram.me/share/url?url=localhost:3000${pathname}?ref=telegram`}>تلگرام</a>} />
                <Dropdown.Item icon="facebook" text={<a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=localhost:3000${pathname}?ref=facebook`}>فیسبوک</a>} />
                <Dropdown.Item icon="twitter" text={<a target="_blank" href={`https://twitter.com/share?url=https://divar.ir/v/MLuliyMwP?ref=twitter&text=%D9%A2%D9%A0%D9%A7%20%D8%A7%D8%AA%D9%88%D9%85%D8%A7%D8%AA%D9%85%D8%AF%D9%84%20%D9%A9%D9%A0%DB%8C%D9%87%20%DA%AF%D9%84%DA%AF%DB%8C%D8%B1%20%D8%AC%D9%84%D9%88%20%D8%B1%D9%86%DA%AF%20(%D8%A8%D8%AF%D9%88%D9%86%20%D8%AA%D8%B5%D8%A7%D8%AF%D9%81)%D8%A8%DB%8C%D9%86%D9%87%20%D8%A7%D8%B2%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%20%D8%AA%D8%AE%D9%81%DB%8C%D9%81%20%D9%88%20%D8%AA%D8%A7%20%D9%A9%D9%A6/%D9%A1%D9%A0%D8%B1%DB%8C%D9%86%DA%AF%20%D8%A7%D8%B3%D9%BE%D8%B1%D8%AA%D8%B1%D9%88%DA%A9%D8%B4%20%D8%AF%D8%B2%D8%AF%DA%AF%DB%8C%D8%B1%D9%87%D9%81%D8%AA%D9%87%20%DB%8C%20%D9%BE%DB%8C%D8%B4%20%D8%AA%D9%85%D8%A7%D9%85%20%D8%B3%D8%B1%D9%88%DB%8C%D8%B3%20%D9%87%D8%A7%20%D8%AF%D8%B1%20%D9%86%D9%85%D8%A7%DB%8C%D9%86%D8%AF%DA%AF%DB%8C%20%D8%A7%D9%86%D8%AC%D8%A7%D9%85%20%D8%B4%D8%AF%D9%87%DA%AF%DB%8C%D8%B1%D8%A8%DA%A9%D8%B3%20%D8%A8%D8%AF%D9%88%D9%86%20%D8%B6%D8%B1%D8%A8%D9%87%D8%AF%D8%B1%20%DA%A9%D9%84%20%D9%85%D8%A7%D8%B4%DB%8C%D9%86%20%D8%A7%D8%B2%20%D9%86%D8%B8%D8%B1%20%D9%81%D9%86%DB%8C%20%D8%A8%D8%AF%D9%88%D9%86%20%D8%AE%D8%B1%D8%AC%20%D8%A8%D9%88%D8%AF%D9%87%20%D9%88%20%D9%87%DB%8C%DA%86%20%D8%A7%DB%8C%D8%B1%D8%A7%D8%AF%DB%8C%20%D9%86%D8%AF%D8%A7%D8%B1%D9%87%D8%A8%D8%A7%D8%B2%D8%AF%DB%8C%D8%AF=%D8%AE%D8%B1%DB%8C%D8%AF`}>توییتر</a>} />
              </Dropdown.Menu>
            </Dropdown>
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