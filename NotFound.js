import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './style.css';

export class NotFound extends Component {
  
  constructor() {
    
  }

  render() {
    return (
      <div className="row justify-content-md-center">
          <div className="col m-10">
            <div>
              <center>
                <h2 className="justify-content-md-center"> 404 Not Found </h2>
                <Link to="/">Return to Home Page</Link>
              </center>
            </div>
          </div>
          
      </div>
    );
  }
}


