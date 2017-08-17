import React, { Component } from 'react';
import Layout from '../../layouts/Admin';
import { Button, Table, Icon } from 'semantic-ui-react';
import Helmet from 'react-helmet';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../AddAdvertising';
import { connect } from 'react-redux';
import Validator from 'validatorjs';
import * as actions from '../../../actions/adminCatsActions';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(values) {
    this.props.addCategory(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Layout>
        <Helmet>
          <title>دیوار - افزودن دسته بندی</title>
        </Helmet>
        <section className="product__inner">
          <h2><Icon name="sitemap" size="small"></Icon> افزودن دسته‌بندی</h2>
          <form className="form ui addAdvForm" method="post" onSubmit={handleSubmit(this.onFormSubmit)}>
            <label htmlFor="name">نام دسته‌بندی</label>
            <Field className="input" name="name" component={renderField} type="text" />

            <label htmlFor="slug">نام لاتین دسته‌بندی</label>
            <Field className="input" name="slug" component={renderField} type="text" />

            <Button color="green" type="submit">ثبت دسته‌بندی</Button>
          </form>
        </section>
      </Layout>
    );
  }
}

const validate = values => {
  const rules = {
    name: 'required',
    slug: 'required',
  };

  const validator = new Validator(values, rules);
  validator.setAttributeNames({
    name: 'نام',
    slug: 'نام لاتین',
  });
  validator.passes();
  return validator
    .errors
    .all();
}

const form = reduxForm({
  form: 'addCategory',
  validate
})(AddCategory);

export default connect(null, actions)(form);