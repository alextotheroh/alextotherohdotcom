import React, { Component } from 'react';

class Portfolio extends Component {
  
  render() {
    return (
      <div className="Portfolio-flexContainer">
        <div className="Portfolio-centeredContainer">

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=edu.indiana.bluesguitarriffs" target="_blank">
            A free Android app teaching blues guitar riffs. 
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=edu.indiana.bluesguitarriffsrockstar" target="_blank">
            Paid version of above with more riffs.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.UltimateSniper3D" target="_blank">
            3D real time multiplayer Android game created with Unity engine.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.sightreadingflashcards" target="_blank">
            A free, open source Android app teaching sight reading of sheet music. 
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://www.youtube.com/channel/UCzY-3OOs0QNArCUvSr3hypA?view_as=subscriber" target="_blank">
            Youtube channel teaching solutions to programming problems.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.curvegolf" target="_blank">
            Android 2D putt-putt game, free.
          </a>

        </div>
      </div>
    );
  }
}

export default Portfolio;