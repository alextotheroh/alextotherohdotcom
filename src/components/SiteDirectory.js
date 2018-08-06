import React, { Component } from 'react';

class SiteDirectory extends Component {
    // todo a tags should be Link tags after implement react-router
  render() {
    return (
      <div className="SiteDirectory-outerContainer">
        <a className="SiteDirectory-clickable">flashcards</a>
      </div>
    );
  }
}

export default SiteDirectory;
