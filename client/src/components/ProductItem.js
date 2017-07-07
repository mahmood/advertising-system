import React, {Component} from 'react';
import {Card, Image, Icon, Grid} from 'semantic-ui-react';

class ProductItem extends Component {
  render() {
    return (
      <Grid.Column computer={4}>
      <Card>
        <Image src={this.props.image}/>
        <Card.Content>
          <Card.Header>
            پاندا
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              ارسال شده ۵ دقیقه پیش
            </span>
          </Card.Meta>
          <Card.Description>
            در حد نو فقط سه بار چپ کرده بیمه تا برج ۱۲ فنی سالم
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='money'/>
            قیمت : ۳۰میلیون
          </a>
        </Card.Content>
      </Card>
      </Grid.Column>
    );
  }
}

export default ProductItem;