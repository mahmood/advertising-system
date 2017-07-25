import React, { Component } from 'react';
import Layout from '../../layouts/Admin';
import { Button, Table, Icon } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as actions from '../../../actions/adminAdsActions';
import { renderField, renderTextarea } from '../../AddAdvertising';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import Validator from 'validatorjs';

class AddAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:3333/api/v1/category`)
    .then(response => {
      this.setState({ cat: response.data.data });
    });
  }
  onFormSubmit(data){
    console.log('form data', data);
    console.log('userId', this.props.userId);
  }
  render() {
    const {handleSubmit} = this.props;
    return (
      <Layout>
        <Helmet>
          <title>پنل مدیریت - افزودن آگهی</title>
        </Helmet>
        <section className="product__inner">
          <h2><Icon name="computer" size="small"></Icon> افزودن آگهی</h2>
          <form className="form ui addAdvForm" onSubmit={handleSubmit(this.onFormSubmit)}>
            <label htmlFor="name">عنوان</label>
            <Field className="input " name="name" component={renderField} type="text"/>
            <label htmlFor="category">دسته بندی</label>
            <Field style={{height: '2.8rem'}} component="select" name="category">
              <option value="" hidden>انتخاب کنید</option>
              {this.state.cat.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </Field>
            <label htmlFor="price_type">نوع فروش</label>
            <Field style={{height: '2.8rem'}} component="select" name="price_type">
              <option value="" hidden>انتخاب کنید</option>
              <option value="adaptive">توافقی</option>
              <option value="normal">مقطوع</option>
              <option value="free">رایگان</option>
            </Field>
            <label htmlFor="price">قیمت</label>
            <Field className="input" placeholder="به تومان" name="price" component={renderField} type="text"/>
            <label htmlFor="textarea">توضیحات</label>
            <Field className="input" name="description" component={renderTextarea}/>
            <Button type="submit" color="green">ثبت آگهی</Button>
          </form>
        </section>
        </Layout>
    );
  }
}

const validate = values => {
  const rules = {
    name: 'required',
    category: 'required',
    price_type: 'required',
    images: 'required',
    description: 'required'
  };

  const validator = new Validator(values, rules);
  validator.setAttributeNames({name: 'نام', category: 'دسته بندی', images: 'عکس', price: 'قیمت', description: 'توضیحات'});
  validator.passes();
  return validator
    .errors
    .all();
};

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.data.id
  }
}

const form = reduxForm({
  form: 'addAds',
  validate
})(AddAds);
export default connect(mapStateToProps, actions)(form);