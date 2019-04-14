import React, { Component } from 'react';
import ViewSourceButton from './ViewSourceButton';

class Portfolio extends Component {
  
  render() {
    return (
      <div className="Portfolio-flexContainer">
        <div className="Portfolio-centeredContainer">

          <a className="Portfolio-portfolioLink" href="https://www.songwriting-inspirationator.com" target="_blank" rel="noopener noreferrer">
            A React web app for songwriters- randomly generates song templates for inspiration 
          </a>
          <ViewSourceButton url="https://github.com/alextotheroh/songwriting-inspirationator"/>
          <br/>

          <a className="Portfolio-portfolioLink" href="https://www.loadergallery.com" target="_blank" rel="noopener noreferrer">
            A web app offering free loading spinners for your website
          </a>
          <ViewSourceButton url="https://github.com/shanehobson/loaders"/>
          <br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=edu.indiana.bluesguitarriffs" target="_blank" rel="noopener noreferrer">
            A free Android app teaching blues guitar riffs. 
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=edu.indiana.bluesguitarriffsrockstar" target="_blank" rel="noopener noreferrer">
            Paid version of above with more riffs.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.UltimateSniper3D" target="_blank" rel="noopener noreferrer">
            3D real time multiplayer Android game created with Unity engine.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.sightreadingflashcards" target="_blank" rel="noopener noreferrer">
            A free, open source Android app teaching sight reading of sheet music. 
          </a>
          <ViewSourceButton url="https://github.com/alextotheroh/SightReadingFlashcards-Android" />
          <br/>

          <a className="Portfolio-portfolioLink" href="https://www.youtube.com/channel/UCzY-3OOs0QNArCUvSr3hypA?view_as=subscriber" target="_blank" rel="noopener noreferrer">
            Youtube channel teaching solutions to programming problems.
          </a><br/>

          <a className="Portfolio-portfolioLink" href="https://play.google.com/store/apps/details?id=com.alextotheroh.curvegolf" target="_blank" rel="noopener noreferrer">
            Android 2D putt-putt game, free.
          </a>

        </div>
      </div>
    );
  }
}

export default Portfolio;