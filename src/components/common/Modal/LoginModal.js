import React, {Component} from 'react';
import NoSSR from 'react-no-ssr';
import {Header, Modal, Button, Message} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import Validator from 'validatorjs';
import {connect} from 'react-redux';
import * as actions from '../../../actions/authActions';
Validator.useLang('fa');

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

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
  }
  onLoginFormSubmit({email, password}) {
    this.props.signIn({email, password});
  }
  render() {
    const {
      authError,
      handleSubmit,
      isLoading,
      pristine,
      submiting,
    } = this.props;
    return (
      <NoSSR>
        <Modal
          size="small"
          trigger={<a className = "item" > ورود </a>}>
          <Modal.Header>ورود</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              {authError ? <Message color="red">{authError}</Message> : <div></div>}
              <form method="post" onSubmit={handleSubmit(this.onLoginFormSubmit)} className="ui form">
                <label htmlFor="email">ایمیل</label>
                <Field 
                  className="input" 
                  name="email" 
                  placeholder="imahmoodzamani@gmail.com" 
                  component={renderField} 
                  type="text"
                />
                <label htmlFor="password">رمز عبور</label>
                <Field className="input" name="password" component={renderField} type="password" />
                <Button 
                  loading={isLoading} 
                  disabled={pristine || submiting} 
                  type="submit" 
                  className="submit__btn" 
                  positive>ورود</Button>
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
    email: 'required|email',
    password: 'required|min:6'
  };

  const validator = new Validator(values, rules);
  validator.setAttributeNames({ email: 'ایمیل', password: 'رمز عبور'});
  validator.passes();
  return validator.errors.all();
};

const form = reduxForm({
  form: 'login',
  validate
})(LoginModal);

const mapStateToProps = ({auth: {error, isLoading}}, ownProps) => {
  return {
    authError: error,
    isLoading: isLoading
  }
}

export default connect(mapStateToProps, actions)(form);
