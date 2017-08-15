import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon, Popup } from 'semantic-ui-react';
import { PersianNumber, PersianNumberWords } from 'react-persian';
import * as moment from 'jalali-moment';
moment.loadPersian();

function renderIndex(index) {
  if(index == 0){
    return 1;
  }else {
    return ++index;
  }
}

const CatsItem = ({
  id,
  index,
  name,
  slug,
  created_at,
}) => {
  return (
    <Table.Row>
      <Table.Cell><PersianNumber>{renderIndex(index).toString()}</PersianNumber></Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{slug}</Table.Cell>
      <Table.Cell>{moment(created_at, "YYYY-MM-DD h:m:s").format("jD jMMMM jYYYY")}</Table.Cell>
      <Table.Cell>
        <Popup
          trigger={<Button size="small" color="red" animated="vertical">
          <Button.Content hidden>حذف</Button.Content>
          <Button.Content visible>
            <Icon name="trash" />
          </Button.Content>
        </Button>}
          content={<Button color='green' content='آیا واقعا حذف شود؟' />}
          on='click'
          position='top right'
        />
      </Table.Cell>
    </Table.Row>
  );
};

CatsItem.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  slug: PropTypes.string,
  created_at: PropTypes.string,
};

export default CatsItem;