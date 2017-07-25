import React, {Component} from 'react';
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

class LoginModal extends Component {
  onLoginFormSubmit({email, fname, lname, password}) {
    console.log(this.props);    
    this.props.register({email, fname, lname, password});
  }
  render() {
    return (
      <NoSSR>
        <Modal
          size="small"
          trigger={<a className = "item" > عضویت </a>}>
          <Modal.Header>عضویت</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              {this.props.registerError ? <Message color="red">{this.props.registerError}</Message> : <div></div>}
              <form method="post" onSubmit={this.props.handleSubmit(this.onLoginFormSubmit.bind(this))} className="ui form">
                <Field half label="نام" name="fname" component={renderField} type="text"/>
                <Field marginRight half className="padd-right" label="نام خانوادگی" name="lname" component={renderField} type="text"/>
                <Field label="ایمیل" name="email" placeholder="imahmoodzamani@gmail.com" component={renderField} type="text" />
                <Field label="رمز عبور" name="password" component={renderField} type="password" />
                <Button loading={this.props.isLoading} disabled={this.props.pristine || this.props.submiting} type="submit" className="submit__btn" positive>ثبت نام</Button>
              </form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </NoSSR>
    )
  }
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

const form = reduxForm({
  form: 'register',
  validate
})(LoginModal);

const mapStateToProps = (state, ownProps) => {
  return {
    registerError: state.auth.registerError,
    isLoading: state.auth.isLoading
  }
}

export default connect(mapStateToProps, actions)(form);
