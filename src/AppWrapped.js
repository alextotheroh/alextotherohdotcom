import React, { Component } from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6f1add'
    }
  }
});

class AppWrapped extends Component {
  
  render() {
    /* basename is from package.json "homepage" field */
    return (
      <BrowserRouter basename="/HomePage">
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default AppWrapped;
