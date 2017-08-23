import React, { Component } from 'react';
import Layout from '../../layouts/Admin';
import { Button, Table, Icon } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as actions from '../../../actions/adminAdsActions';
import Dropzone from 'react-dropzone';
import { renderField, renderTextarea, renderDropzoneInput } from '../../AddAdvertising';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import Validator from 'validatorjs';
import { apiEndPoint } from '../../../../config.js';

class AddAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(apiEndPoint+"/category")
    .then(response => {
      this.setState({ cat: response.data.data });
    });
  }
  onFormSubmit(data){
    this.props.addProduct(data);
  }
  render() {
    const { handleSubmit } = this.props;
    const { cat } = this.state
    return (
      <Layout>
        <Helmet>
          <title>پنل مدیریت - افزودن آگهی</title>
        </Helmet>
        <section className="product__inner adminAddAds">
          <h2><Icon name="computer" size="small"></Icon> افزودن آگهی</h2>
          <form encType='multipart/form-data' className="form ui addAdvForm" onSubmit={handleSubmit(this.onFormSubmit)}>
            <label htmlFor="name">عنوان</label>
            <Field className="input " name="name" component={renderField} type="text"/>
            <label htmlFor="category">دسته بندی</label>
            <Field style={{height: '2.8rem'}} component="select" name="category">
              <option value="" hidden>انتخاب کنید</option>
              {cat.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
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
            
            <label htmlFor="images">عکس</label>
            <Field className="input" name="photo" component={renderDropzoneInput}/>

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
    // images: 'required',
    description: 'required'
  };

  const validator = new Validator(values, rules);
  validator.setAttributeNames({
    name: 'نام',
    category: 'دسته بندی',
    images: 'عکس',
    price: 'قیمت',
    description: 'توضیحات'
  });
  validator.passes();
  return validator
    .errors
    .all();
};

const form = reduxForm({
  form: 'addAds',
  validate
})(AddAds);
export default connect(null, actions)(form);