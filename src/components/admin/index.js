import React, { Component } from 'react';
import Layout from '../layouts/Admin';
import { Card } from 'semantic-ui-react';

class Admin extends Component {
  render() {
    return (
      <Layout>
      <Card.Group>
      <Card color="blue">
        <Card.Content>
          <Card.Header>تعداد کل آگهی ها</Card.Header>
          <Card.Description>۱۰۰</Card.Description>
        </Card.Content>
      </Card>
  
      <Card color="green">
        <Card.Content>
          <Card.Header>آگهی های تایید شده</Card.Header>
          <Card.Description>۹۰</Card.Description>
        </Card.Content>
      </Card>

      <Card color="yellow">
        <Card.Content>
          <Card.Header>تعداد آگهی های منتظر تایید</Card.Header>
          <Card.Description>۱۰</Card.Description>
        </Card.Content>
      </Card>

      <Card color="red">
        <Card.Content>
         <Card.Header>تعداد کاربران</Card.Header>
          <Card.Description>۱۰۰۰</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
      </Layout>
    );
  }
}

export default Admin;