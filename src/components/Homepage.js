import React, { Component } from 'react';
import HomepageTitle from './HomepageTitle';
import { Link } from 'react-router-dom';
import resumePDF from '../documents/AlexTotheroh_Resume_04292019.pdf';

class Homepage extends Component {
  
  render() {
    return (
      <div className="Homepage-outerContainer">
        <HomepageTitle />
        <div className="Homepage-textContainer"><br/>
          <div className="Homepage-textLine">I have professional experience in Java, Javascript, NodeJS, Scala, Android,</div>
          <div className="Homepage-textLine">Docker, AWS, and various supporting technologies.</div>
          <div className="Homepage-textLine">In addition to my degree in Computer Science, I have a humanities degree, which</div>
          <div className="Homepage-textLine">has helped me apply effective writing and communication skills to the complex world of software development.</div>
          <div className="Homepage-textLine">I also have higher level experience designing systems and leading projects.</div><br/>
          <div className="Homepage-textLine">In short, I like to make things, and I like solving complex problems with other people.</div><br/>

          <div className="Homepage-textLine">{"Here is my "} 
            <a className="Homepage-clickable" 
              href={resumePDF} 
              target="_blank"
              rel="noopener noreferrer">
              resume.
            </a>
          </div>

          <div className="Homepage-textLine">Here is my <Link className="Homepage-clickable" to="/portfolio">portfolio.</Link></div>

          <div className="Homepage-textLine">{"Here is my "} 
            <a className="Homepage-clickable" href="https://www.linkedin.com/in/alextotheroh/" target="_blank" rel="noopener noreferrer">
              LinkedIn page.
            </a>
          </div>

          <div className="Homepage-textLine">When I'm not programming, I enjoy playing blues guitar, hiking, and playing 
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
