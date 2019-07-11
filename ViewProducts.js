import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


export class ViewProducts extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>View Products</h2>
        </div>
      </div>
    );
  }
}
