import React, { Component } from 'react';
import Layout from '../layouts/Admin';
import { Card } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: { }
    }
  }
  componentDidMount() {
    console.log('dimount');
    axios.get('http://localhost:3333/api/v1/info')
    .then(response => {
      this.setState({ info: response.data });
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return (
      <Layout>
        <Helmet>
          <title>پنل مدیریت - داشبورد</title>
        </Helmet>
        <Card.Group>
          <Card color="blue">
            <Card.Content>
              <Card.Header>تعداد کل آگهی ها</Card.Header>
              <Card.Description>{this.state.info.allProducts}</Card.Description>
            </Card.Content>
          </Card>
      
          <Card color="green">
            <Card.Content>
              <Card.Header>آگهی های تایید شده</Card.Header>
              <Card.Description>{this.state.info.approvedProducts}</Card.Description>
            </Card.Content>
          </Card>

          <Card color="yellow">
            <Card.Content>
              <Card.Header>تعداد آگهی های منتظر تایید</Card.Header>
              <Card.Description>{this.state.info.notApprovedProducts}</Card.Description>
            </Card.Content>
          </Card>

          <Card color="red">
            <Card.Content>
            <Card.Header>تعداد کاربران</Card.Header>
              <Card.Description>{this.state.info.totalUsers}</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Layout>
    );
  }
}

export default Admin;