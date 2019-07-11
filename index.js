import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import { RouteBody } from './app-routes';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'

      
    };
  }
  
  render() {
    return (
      <RouteBody />
    );
  }
}

render(<App />, document.getElementById('root'));
