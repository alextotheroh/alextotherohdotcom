import React, { Component } from 'react';
import mePNG from '../img/profilePicCropped.png';

const profilePicHeight = "200px"

class HomepageTitle extends Component {
  
  render() {
    return (
      <div className="Homepage-nameAndPicContainer">
        
        <div className="Homepage-name">Alex Totheroh</div>

        <div className="Homepage-picContainer">
          <img src={mePNG} height={profilePicHeight} alt="Alex Totheroh"/>
        </div>
      </div>
    );
  }
}

export default HomepageTitle;