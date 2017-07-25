import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

// Authenticaton HOC
export default function(ComposedComponent, allowed) {
  class Authentication extends Component {
    componentWillMount() {
      console.log(this.props.role);
      if(!this.props.isLogged) {
        //Redirect to homepage
          this.props.history.push('/');
      }else if(this.props.role !== allowed) {
        this.props.history.push('/');
      }
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.isLogged) {
        //Redirect to homapage
          this.props.history.push('/');
      }else if(this.props.role !== allowed) {
        this.props.history.push('/');
      }
    }
    render(){
      return <ComposedComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      isLogged: state.auth.loggedIn,
      role: state.auth.data.role
    };
  };
  const router = withRouter(Authentication);
  return connect(mapStateToProps)(router);
};
