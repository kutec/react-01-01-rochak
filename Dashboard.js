import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, Route, withRouter } from 'react-router-dom';
import { DashboardRoutesBody } from './app-routes';
import { ViewProducts } from './ViewProducts';
import { Cart } from './Cart';
import './style.css';


export class Dashboard extends Component {
  
  state = {
    
  }
  constructor() {
    
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/dashboard/viewProducts">Home</Link>
                </li>
                |
                <li className="nav-item">
                  <Link to="/dashboard/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-12">
          <DashboardRoutesBody/>
        </div>
      </div>
    );
  }
}

