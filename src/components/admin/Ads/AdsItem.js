import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon, Popup } from 'semantic-ui-react';
import { PersianNumber, PersianNumberWords } from 'react-persian';
import * as moment from 'jalali-moment';
moment.loadPersian();

function renderPriceType(type) {
  switch(type) {
    case 'normal': 
      return 'مقطوع';
    case 'free': 
      return 'رایگان';
    case 'adaptive':
      return 'توافقی';
    default: 
      return 'قطعا اشتباه زدی!‌ :))';
  }
}

function renderIndex(index) {
  if(index == 0){
    return 1;
  }else {
    return ++index;
  }
}

const AdsItem = ({
  id,
  index,
  name,
  price_type,
  price,
  created_at,
  category,
  description,
  deleteProduct,
  verifyProduct,
  verified
}) => {
  return (
    <Table.Row>
      <Table.Cell><PersianNumber>{renderIndex(index).toString()}</PersianNumber></Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>تایید شده</Table.Cell>
      <Table.Cell>{renderPriceType(price_type)}</Table.Cell>
      <Table.Cell><PersianNumberWords>{price.toString()}</PersianNumberWords> تومان</Table.Cell>
      <Table.Cell>{moment(created_at, "YYYY-MM-DD h:m:s").format("jD jMMMM jYYYY")}</Table.Cell>
      <Table.Cell>{category}</Table.Cell>
      <Table.Cell>{description.slice(0, 200)}</Table.Cell>
      <Table.Cell>
        <Popup
          trigger={<Button size="small" color="red" animated="vertical">
          <Button.Content hidden>حذف</Button.Content>
          <Button.Content visible>
            <Icon name="trash" />
          </Button.Content>
        </Button>}
          content={<Button color='green' onClick={() => deleteProduct(id)} content='آیا واقعا حذف شود؟' />}
          on='click'
          position='top right'
        />
        {verified !== 1 && <Popup
        trigger={<Button size="small" color="green" animated="vertical">
        <Button.Content hidden>تایید</Button.Content>
        <Button.Content visible>
          <Icon name="check" />
        </Button.Content>
    </Button>}
        content={<Button onClick={() => verifyProduct(id)} color='green' content='تایید آگهی' />}
        on='click'
        position='top right'
      />}
      </Table.Cell>
    </Table.Row>
  );
};

AdsItem.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  price_type: PropTypes.string,
  price: PropTypes.number,
  created_at: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  deleteProduct: PropTypes.func,
  verifyProduct: PropTypes.func,
  verified: PropTypes.number
};

export default AdsItem;