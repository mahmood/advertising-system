import React, { Component } from 'react';
import Layout from '../layouts/Admin';
import { Card } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import axios from 'axios';
import { apiEndPoint } from '../../../config.js';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    }
  }
  componentDidMount() {
    axios.get(apiEndPoint)
    .then(response => {
      this.setState({ info: response.data });
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    const { info } = this.state;
    return (
      <Layout>
        <Helmet>
          <title>پنل مدیریت - داشبورد</title>
        </Helmet>
        <Card.Group>
          {info && info.map(({ color, title, count, id }) => (
            <Card key={id} color={color}>
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Description>{count}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Layout>
    );
  }
}

export default Admin;