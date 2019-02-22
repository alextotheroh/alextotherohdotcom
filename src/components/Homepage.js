import React, { Component } from 'react';
import HomepageTitle from './HomepageTitle';
import { Link } from 'react-router-dom';
import resumePDF from '../documents/AlexTotheroh_Resume_08012018.pdf';

class Homepage extends Component {
  
  render() {
    return (
      <div className="Homepage-outerContainer">
        <HomepageTitle />
        <div className="Homepage-textContainer">
          <div className="Homepage-textLine">After getting a B.A. in History, I was going to go to law school.</div>
          <div className="Homepage-textLine">It turns out being a lawyer is not for me, so instead, I went back to college and got a B.S. in Computer Science.</div>
          <div className="Homepage-textLine">This was a great decision because I love programming, and I love designing systems.</div>
          <div className="Homepage-textLine">I have professional experience with Java, ReactJS/Redux, Scala, Android, and various supporting technologies.</div>
          <div className="Homepage-textLine">I also have higher level experience designing and scaling systems.</div>

          <div className="Homepage-textLine">{"Here is my "} 
            <a className="Homepage-clickable" 
              href={resumePDF} 
              target="_blank">
              resume.
            </a>
          </div>

          <div className="Homepage-textLine">Here is my <Link className="Homepage-clickable" to="/portfolio">portfolio.</Link></div>

          <div className="Homepage-textLine">{"Here is my "} 
            <a className="Homepage-clickable" href="https://www.linkedin.com/in/alextotheroh/" target="_blank" rel="noopener noreferrer">
              LinkedIn page.
            </a>
          </div>

          <div className="Homepage-textLine">In the rare moments when I'm not programming, I enjoy playing blues guitar, hiking, and playing 
            with my dog, Bruno.</div>

          <div className="Homepage-textLine">Here are some of my favorite <Link className="Homepage-clickable" to="/photos">photos.</Link></div>

          <div className="Homepage-textLine">{"You can get in touch with me at "}
            <a className="Homepage-clickable" 
              href="mailto:alextotheroh@gmail.com">
              alextotheroh@gmail.com
            </a>
          </div>

        </div>
        {/* <SiteDirectory /> */}
      </div>
    );
  }
}

export default Homepage;
