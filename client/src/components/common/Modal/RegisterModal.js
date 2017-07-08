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

const LoginModal = (props) => {
  return (
    <NoSSR>
      <Modal
        size="small"
        dimmer="blurring"
        trigger={<a className = "item" > عضویت </a>}>
        <Modal.Header>عضویت</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <form method="post" onSubmit={props.handleSubmit(onLoginFormSubmit)} className="ui form">
              <Field half label="نام" name="fname" component={renderField} type="text"/>
              <Field marginRight half className="padd-right" label="نام خانوادگی" name="lname" component={renderField} type="text"/>
              <Field label="ایمیل" name="email" placeholder="imahmoodzamani@gmail.com" component={renderField} type="text" />
              <Field label="رمز عبور" name="password" component={renderField} type="password" />
              <Button disabled={!props.valid} type="submit" className="submit__btn" positive>ثبت نام</Button>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </NoSSR>
  )
};

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

export default reduxForm({
  form: 'login',
  validate
})(LoginModal);