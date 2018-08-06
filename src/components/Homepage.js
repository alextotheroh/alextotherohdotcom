import React, { Component } from 'react';
import SiteDirectory from './SiteDirectory';

class Homepage extends Component {
  // todo a tags should be react-router <Link> tags, need to incorporate react-router first
  render() {
    return (
      <div className="Homepage-outerContainer">
        <div className="Homepage-name">Alex Totheroh</div>
        <div className="Homepage-textContainer">
          <div className="Homepage-textLine">After college, I was going to go to law school.</div>
          <div className="Homepage-textLine">It turns out being a lawyer is terrible, so instead, I went back to college and studied computer science.</div>
          <div className="Homepage-textLine">This was a great decision because it turns out I love programming, and I love designing systems.</div>
          <div className="Homepage-textLine">I have experience with Java, ReactJS/Redux, Scala, Android, and various supporting technologies.</div>
          <div className="Homepage-textLine">I also have higher level experience designing and scaling systems.</div>
          <div className="Homepage-textLine">Here is my <a className="Homepage-clickable">resume.</a></div>
          <div className="Homepage-textLine">Here is my <a className="Homepage-clickable">portfolio.</a></div>
          <div className="Homepage-textLine">In the rare moments when I'm not programming, I enjoy playing blues guitar, hiking, and playing 
            with my dog, <a className="Homepage-clickable">Bruno.</a></div>
          <div className="Homepage-textLine">You can get in touch with me at <a className="Homepage-clickable">alextotheroh@gmail.com.</a></div>
        </div>
        <SiteDirectory />
      </div>
    );
  }
}

export default Homepage;
