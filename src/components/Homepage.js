import React, { Component } from 'react';

class Homepage extends Component {
  render() {

    // dyunamically set line height based on 

    return (
      <div className="Homepage-outerContainer">
        <div className="Homepage-name">Alex Totheroh</div>
        <div className="Homepage-textContainer">
          <div className="Homepage-textLine">After college, I was going to go to law school.</div>
          <div className="Homepage-textLine">It turns out being a lawyer is terrible, so instead, I went back to college and studied computer science.</div>
          <div className="Homepage-textLine">This was a great decision because it turns out I love programming, and I love designing systems.</div>
          <div className="Homepage-textLine">I have experience with Java, ReactJS/Redux, Scala, Android, and various supporting technologies.</div>
          <div className="Homepage-textLine">I also have higher level experience designing and scaling systems.</div>
          <div className="Homepage-textLine">Here is my resume.</div>
          <div className="Homepage-textLine">Here is my portfolio.</div>
          <div className="Homepage-textLine">In the rare moments when I'm not programming, I enjoy playing blues guitar, hiking, and playing with my dog, Bruno.</div>
          <div className="Homepage-textLine">You can get in touch with me at alextotheroh@gmail.com.</div>
        </div>
      </div>
    );
  }
}

export default Homepage;
