import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

// Authenticaton HOC
export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if(!this.props.isLogged) {
        //Redirect to homepage
        this.props.history.push('/');
      }
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.isLogged) {
        //Redirect to homapage
        this.props.history.push('/');
      }
    }
    render(){
      return <ComposedComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      isLogged: state.auth.loggedIn
    };
  };
  const router = withRouter(Authentication);
  return connect(mapStateToProps)(router);
};
