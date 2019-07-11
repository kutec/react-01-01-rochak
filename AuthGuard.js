import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const AuthService = {
  isAuthenticated: false,
  authenticated(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export const AuthRoute = ({ component: Component, ...rest}) => { 
  return (
  <Route {...rest} render={(props) => (
     AuthService.isAuthenticated === true ? <Component {...props} /> : <Redirect to='/' /> 
  )}/>
)};