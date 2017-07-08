import React, {Component} from 'react';
import NoSSR from 'react-no-ssr';
import {Header, Modal, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import Validator from 'validatorjs';
Validator.useLang('fa');

function onLoginFormSubmit(values) {
  alert(`email: ${values.email}, pass: ${values.password}`);
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div className="input-align">
      <label>{label}</label>    
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="error">{warning}</span>))}
    </div>
  </div>
)

const LoginModal = (props) => {
  return (
    <NoSSR>
      <Modal
        size="small"
        dimmer="blurring"
        trigger={<a className = "item" > ورود </a>}>
        <Modal.Header>ورود</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <form method="post" onSubmit={props.handleSubmit(onLoginFormSubmit)} className="ui form">
              <label htmlFor="email">ایمیل</label>
              <Field className="input" name="email" placeholder="imahmoodzamani@gmail.com" component={renderField} type="text" />
              <label htmlFor="password">رمز عبور</label>
              <Field className="input" name="password" component={renderField} type="password" />
              <Button disabled={!props.valid} type="submit" className="submit__btn" positive>ورود</Button>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </NoSSR>
  )
};

const validate = values => {
  const rules = {
    email: 'required|email',
    password: 'required|min:6'
  };

  const validator = new Validator(values, rules);
  validator.setAttributeNames({ email: 'ایمیل', password: 'رمز عبور'});
  validator.passes();
  return validator.errors.all();
};

export default reduxForm({
  form: 'login',
  validate
})(LoginModal);