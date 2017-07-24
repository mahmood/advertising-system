import React from 'react';
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

const AdsItem = props => {
  return (
    <Table.Row>
      <Table.Cell>۱</Table.Cell>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>تایید شده</Table.Cell>
      <Table.Cell>{renderPriceType(props.price_type)}</Table.Cell>
      <Table.Cell><PersianNumberWords>{props.price.toString()}</PersianNumberWords> تومان</Table.Cell>
      <Table.Cell>{moment(props.created_at, "YYYY-MM-DD h:m:s").format("jD jMMMM jYYYY")}</Table.Cell>
      <Table.Cell>{props.category}</Table.Cell>
      <Table.Cell>{props.description.slice(0, 200)}</Table.Cell>
      <Table.Cell>
        <Popup
          trigger={<Button size="small" color="red" animated="vertical">
          <Button.Content hidden>حذف</Button.Content>
          <Button.Content visible>
            <Icon name="trash" />
          </Button.Content>
        </Button>}
          content={<Button color='green' onClick={() => props.deleteProduct(props.id)} content='آیا واقعا حذف شود؟' />}
          on='click'
          position='top right'
        />
        <Popup
        trigger={<Button size="small" color="green" animated="vertical">
        <Button.Content hidden>تایید</Button.Content>
        <Button.Content visible>
          <Icon name="check" />
        </Button.Content>
    </Button>}
        content={<Button color='green' content='تایید آگهی' />}
        on='click'
        position='top right'
      />
      </Table.Cell>
    </Table.Row>
  );
};

export default AdsItem;