import React, { Component } from 'react';
import mePNG from '../img/profilePicCropped.png';

const profilePicHeight = "150px"

class HomepageTitle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  mouseEnter = () => {
    this.setState({
      hover: true
    });
  }

  mouseLeave = () => {
    this.setState({
      hover: false
    });
  }
  
  render() {
    return (
      <div className="Homepage-nameAndPicContainer">
        
        <div className="Homepage-name"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}>Alex Totheroh</div>

        {this.state.hover ? 
          <div className="Homepage-picContainer">
            <img src={mePNG} height={profilePicHeight} alt="Alex Totheroh"/>
          </div> : ''}
      </div>
    );
  }
}

export default HomepageTitle;