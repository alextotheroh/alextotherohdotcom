import React, { Component } from 'react';

class Portfolio extends Component {
  
  render() {
    return (
      <div className="Portfolio-flexContainer">
        <div className="Portfolio-centeredContainer">

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=edu.indiana.bluesguitarriffs">
            A free Android app teaching blues guitar riffs. 
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=edu.indiana.bluesguitarriffsrockstar">
            Paid version of above with more riffs.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.UltimateSniper3D">
            3D real time multiplayer Android game created with Unity engine.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://www.youtube.com/channel/UCzY-3OOs0QNArCUvSr3hypA?view_as=subscriber">
            Youtube channel teaching solutions to programming problems.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.curvegolf">
            Android 2D putt-putt game, free.
          </a>

        </div>
      </div>
    );
  }
}

export default Portfolio;