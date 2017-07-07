import React, {Component} from 'react';
import {Grid, Card, Icon, Image, Segment} from 'semantic-ui-react';
import Header from './common/Header';
import PandaImage from '../images/panda.jpg';
import SideMenu from './common/SideMenu';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="rtl">
          <Grid container>
            <Grid.Row>
              <Grid.Column computer={3}>
                <SideMenu />
              </Grid.Column>
              <Grid.Column computer={13}>
                <Grid>
                  <Grid.Column computer={4}>
                    <Card>
                      <Image src={PandaImage}/>
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

                  <Grid.Column computer={4}>
                    <Card>
                      <Image src={PandaImage}/>
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

                  <Grid.Column computer={4}>
                    <Card>
                      <Image src={PandaImage}/>
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

                  <Grid.Column computer={4}>
                    <Card>
                      <Image src={PandaImage}/>
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

                  <Grid.Column computer={4}>
                    <Card>
                      <Image src={PandaImage}/>
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

                  <Grid.Column computer={4}>
                    <Card>
                      <Image src={PandaImage}/>
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
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;