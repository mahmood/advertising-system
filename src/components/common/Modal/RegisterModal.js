import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NoSSR from 'react-no-ssr';
import {Header, Modal, Button, Message} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import Validator from 'validatorjs';
import * as actions from '../../../actions/authActions';
import { connect } from 'react-redux';

Validator.useLang('fa');

const renderField = ({
  input,
  label,
  type,
  half,
  marginRight,
  className,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div className={half && 'half'}>
    <div className="input-align">
      <label className={className}>{label}</label>    
      <input {...input} className={className} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
)

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
  }
  onLoginFormSubmit({email, fname, lname, password}) {
    this.props.register({email, fname, lname, password});
  }
  render() {
    const { 
      handleSubmit,
      registerError,
      isLoading,
      pristine,
      submiting
    } = this.props;
    return (
      <NoSSR>
        <Modal
          size="small"
          trigger={<a className = "item" > عضویت </a>}>
          <Modal.Header>عضویت</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              {registerError && <Message color="red">{registerError}</Message>}
              <form method="post" onSubmit={handleSubmit(this.onLoginFormSubmit)} className="ui form">
                <Field half label="نام" name="fname" component={renderField} type="text"/>
                <Field 
                  marginRight 
                  half 
                  className="padd-right" 
                  label="نام خانوادگی" 
                  name="lname" 
                  component={renderField} 
                  type="text"
                />
                <Field 
                  label="ایمیل" 
                  name="email" 
                  placeholder="imahmoodzamani@gmail.com" 
                  component={renderField} 
                  type="text"
                />
                <Field label="رمز عبور" name="password" component={renderField} type="password" />
                <Button 
                  loading={isLoading} 
                  disabled={pristine || submiting} 
                  type="submit" 
                  className="submit__btn" 
                  positive>
                  ثبت نام
                </Button>
              </form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </NoSSR>
    )
  }
}

const validate = values => {
  const rules = {
    fname: 'required|max:60',
    lname: 'required|max:90',
    email: 'required|email',
    password: 'required|min:6'
  };

  const validator = new Validator(values, rules);
  validator.setAttributeNames({ email: 'ایمیل', password: 'رمز عبور', fname: 'نام', lname: 'نام خانوادگی'});
  validator.passes();
  return validator.errors.all();
};

const form = reduxForm({
  form: 'register',
  validate
})(RegisterModal);

const mapStateToProps = ({auth: {registerError, isLoading}}, ownProps) => {
  return {
    registerError: registerError,
    isLoading: isLoading
  };
};

RegisterModal.propTypes = {
  authError: PropTypes.string,
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps, actions)(form);
