import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

// Authenticaton HOC
export default function(ComposedComponent, allowed) {
  class Authentication extends Component {
    handleAuth() {
      const { isLoggedIn, role, history } = this.props;
      if(!isLoggedIn) {
        history.push('/');
      }else if(role !== allowed) {
        history.push('/');
      }
    }
    componentWillMount() {
      this.handleAuth();
    }
    componentWillUpdate(nextProps) {
      this.handleAuth();
    }
    render(){
      return <ComposedComponent {...this.props}/>;
    }
  }

  const mapStateToProps = ({auth: { loggedIn, data: { role } }}, ownProps) => {
    return {
      isLoggedIn: loggedIn,
      role
    };
  };
  const router = withRouter(Authentication);
  return connect(mapStateToProps)(router);
};
