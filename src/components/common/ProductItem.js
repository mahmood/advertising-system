import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Icon, Grid} from 'semantic-ui-react';
import { PersianNumber } from 'react-persian';
import moment from 'jalali-moment';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  renderPrice(price, type) {
    if(price && type == 'normal') {
      return `قیمت : ${price} تومان`;
    }else if(type == 'free') {
      return 'رایگان';
    }else if(type == 'adaptive') {
      return 'توافقی'
    }
  }
  render() {
    const {
      created_at,
      description,
      price,
      price_type,
      image
    } = this.props;
    return (
      <Grid.Column computer={4}>
      <Card className="product">
        <Image className="product__image" src={`http://localhost:3333/uploads/${image}`}/>
        <Card.Content>
          <Card.Header>
            <Link to={`/ads/${this.props.id}`}>{this.props.name}</Link>
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {moment(created_at, "YYYY-MM-DD h:m:s").fromNow()}
            </span>
          </Card.Meta>
          <Card.Description>
            {description && description.slice(0, 150)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='money'/>
            <PersianNumber>{this.renderPrice(price, price_type)}</PersianNumber>
          </a>
        </Card.Content>
      </Card>
      </Grid.Column>
    );
  }
}

ProductItem.propTypes = {
  created_at: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  price_type: PropTypes.string,
  image: PropTypes.string
};

export default ProductItem;