import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ViewSourceButton extends Component {

  onClick = (event) => {
    window.open(this.props.url, "_blank");
  }
  
  render() {
    return (
      <div className="ViewSourceButton-buttonContainer">
        <Button variant="contained" color="primary" size="small" onClick={this.onClick}>
          View Source
        </Button>
      </div>
    );
  }
}

export default ViewSourceButton;