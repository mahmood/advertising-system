import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Home';
import {Helmet} from 'react-helmet';
import {Grid, Button} from 'semantic-ui-react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import Validator from 'validatorjs';
import axios from 'axios';
import * as actions from '../actions/productActions';

Validator.useLang('fa');

export const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: {
    touched,
    error,
    warning
  }
}) => (
  <div>
    <div className="input-align">
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type}/> {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
);

export const renderTextarea = ({
  input,
  label,
  type,
  placeholder,
  meta: {
    touched,
    error,
    warning
  }
}) => (
  <div>
    <div className="input-align">
      <label>{label}</label>
      <textarea {...input} placeholder={placeholder} type={type}/> {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
);

export const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        className="upload"
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>
          <p>عکس های آگهی را درون این کادر بکشید.</p>
            {files && Array.isArray(files) && (
              <div>
                { files.map((file, i) => <img key={i} width="100" height="100" style={{ margin: '0 5px' }} src={file.preview}/>) }
              </div>
            )}
        </div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>
  );
}
class addAdvertising extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: []
    };
  }
  onFormSubmit(data) {
    const userId = this.props.userId;
    this.props.addProduct(data, userId);
  }
  componentDidMount() {
    axios.get(`http://localhost:3333/api/v1/category`)
      .then(response => {
        this.setState({ cat: response.data.data });
      });
  }
  render() {
    const {
      handleSubmit,
      allowPrice
    } = this.props;
    const { cat } = this.state;
    return (
      <Layout>
        <Helmet>
          <title>دیوار - افزودن آگهی</title>
        </Helmet>
        <Grid container className="addProduct">
          <h2>افزودن آگهی</h2>
          <Grid.Row>
          <form method="post" encType='multipart/form-data' onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="grid ui form">
          
          <Grid.Column computer={7} mobile={16}>
              <label htmlFor="name">عنوان</label>
              <Field className="input" name="name" component={renderField} type="text"/>
          </Grid.Column>

          <Grid.Column computer={3} mobile={16}>
            <label htmlFor="category">دسته بندی</label>
            <Field style={{height: '2.8rem'}} component="select" name="category">
              <option value="" hidden>انتخاب کنید</option>
              {cat.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </Field>
          </Grid.Column>

          <Grid.Column computer={3} mobile={16}>
          <label htmlFor="price_type">نوع فروش</label>
            <Field style={{height: '2.8rem'}} component="select" name="price_type">
              <option value="" hidden>انتخاب کنید</option>
              <option value="adaptive">توافقی</option>
              <option value="normal">مقطوع</option>
              <option value="free">رایگان</option>
            </Field>
          </Grid.Column>

          {allowPrice == 'normal' && <Grid.Column computer={3} mobile={16}>
            <label htmlFor="price">قیمت</label>
            <Field className="input" placeholder="به تومان" name="price" component={renderField} type="text"/>
          </Grid.Column>}

          <Grid.Column computer={8} mobile={16}>
            <label htmlFor="images">عکس</label>
            <Field className="input" name="images" component={renderDropzoneInput}/>
          </Grid.Column>

          <Grid.Column computer={8} mobile={16}>
            <label htmlFor="textarea">توضیحات</label>
            <Field className="input" name="description" component={renderTextarea}/>
          </Grid.Column>
              <Button type="submit" className="submit__btn" positive>ثبت آگهی</Button>
            </form>
          </Grid.Row>
        </Grid>
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

const form = reduxForm({form: 'addProduct', validate})(addAdvertising);

const mapStateToProps = state => {
  const selector = formValueSelector('addProduct')
  return {
    allowPrice: selector(state, 'price_type'),
    userId: state.auth.data.id
  }
}

addAdvertising.propTypes = {
  allowPrice: PropTypes.bool,
  userId: PropTypes.number,
  handleSubmit: PropTypes.func
};

export default connect(mapStateToProps, actions)(form);