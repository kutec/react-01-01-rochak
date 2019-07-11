import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { AuthService } from './AuthGuard';
import { AuthenticationService } from './services/auth.service';
import './style.css';

export class Login extends Component {
  debugger;
  authService = AuthService;
  isLoggedIn = false;
  authenticationService = new AuthenticationService();
  state = {
    toDashboard: false
  }
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  getUserInfo = () => {
    return {
      email: document.getElementById('defaultLoginFormEmail').value,
      password: document.getElementById('defaultLoginFormPassword').value
    }
  }

  login = () => {
    let userInfo = this.getUserInfo();
    this.authenticationService.login(userInfo).subscribe((response) => {
      if (response.loggedIn) {
        this.setState(() => ({
          toDashboard: true
        }));
      }
    });
  }

  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }



  submitForm = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["emailid"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="dashboard" />
    }

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-4 col-md-auto">
          <form className="text-center border border-light p-5 m-10" onSubmit={this.submitForm}>

            <p className="h4 mb-4">Sign in</p>

            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" value={this.state.fields.emailid} onChange={this.handleChange}   />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

            <div className="d-flex justify-content-around">
              <div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                  <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                </div>
              </div>
              <div>
                <a href="">Forgot password?</a>
              </div>
            </div>

            <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

            <p>Not a member?
                 <Link from="/" to='/register' >Register</Link >
            </p>

          </form>
        </div>
      </div>
    );
  }
}

