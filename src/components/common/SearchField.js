import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Button, Icon } from 'semantic-ui-react';
import Validator from 'validatorjs';
import * as actions from '../../actions/productActions';
import { connect } from 'react-redux';

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div className="half">
    <div className="input-align">
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
)

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
  }
  onSearchFormSubmit({ term }) {
    this.props.searchProduct(term);
  }
  render() {
    const { 
      handleSubmit,
      categories,
      term,
      fetchProducts
    } = this.props;
    return (
      <div>
        <div className="search">
          <form className="form ui" onSubmit={handleSubmit(this.onSearchFormSubmit)}>
            <Field name="term" type="text" placeholder="جستجو در آگهی ها" component={renderField}/>
            <Field name="category" className="half pad" type="select" component="select">
              {categories && categories.map(cat => <option value={cat.id} key={cat.id}>{cat.name}</option>)}
            </Field>
            <Button color="green">جستجو</Button>
          </form>
        </div>
        {term && 
          <span className="search_term">
            {term} 
            <Icon name="close" onClick={ () => fetchProducts() } size="large"/>
          </span>
        }
      </div>
    );
  }
}

const validate = values => {
  const rules = {
    term: 'required'
  };

  const validator = new Validator(values, rules);
  validator.setAttributeNames({ term: 'متن جستجو', category: 'دسته بندی'});
  validator.passes();
  return validator.errors.all();
};

const form = reduxForm({
  form: 'search',
  validate
})(SearchField);

const mapStateToProps = (state, ownProps) => {
  return {
    term : state.product.term
  }
}

SearchField.propTypes = {
  term: PropTypes.string,
  handleSubmit: PropTypes.func,
  fetchProducts: PropTypes.func,
  categories: PropTypes.array
}

export default connect(mapStateToProps, actions)(form);