import React, {Component} from 'react';
import {Card, Image, Icon, Grid} from 'semantic-ui-react';
import { PersianNumber } from 'react-persian';

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
    return (
      <Grid.Column computer={4}>
      <Card className="product">
        <Image className="product__image" src={`http://localhost:3333/uploads/${this.props.image}`}/>
        <Card.Content>
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              ارسال شده ۵ دقیقه پیش
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='money'/>
            <PersianNumber>{this.renderPrice(this.props.price, this.props.price_type)}</PersianNumber>
          </a>
        </Card.Content>
      </Card>
      </Grid.Column>
    );
  }
}

export default ProductItem;