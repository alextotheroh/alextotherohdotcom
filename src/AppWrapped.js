import React, { Component } from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

class AppWrapped extends Component {
  
  render() {
    /* basename is from package.json "homepage" field */
    return (
      <BrowserRouter basename="/HomePage">
        <App />
      </BrowserRouter>
    );
  }
}

export default AppWrapped;
