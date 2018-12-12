import React, { Component } from 'react';
import bruno1 from '../img/bruno1.jpg';
import bruno2 from '../img/bruno2.jpg';
import bruno3 from '../img/bruno3.jpg';

const imgWidth = "600px";

class Bruno extends Component {
  
  render() {
    return (
      <div>
        <br/><br/>
        <img src={bruno1} width={imgWidth} className="Bruno-img" alt="dog"/><br/><br/>
        <img src={bruno2} width={imgWidth} className="Bruno-img" alt="dog"/><br/><br/>
        <img src={bruno3} width={imgWidth} className="Bruno-img" alt="dog"/><br/><br/>
      </div>
    );
  }
}

export default Bruno;
