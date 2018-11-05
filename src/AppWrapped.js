import React, { Component } from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

class AppWrapped extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default AppWrapped;
