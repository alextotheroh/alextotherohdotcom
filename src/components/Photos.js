import React, { Component } from 'react';
import bruno1 from '../img/bruno1.jpg';
import bruno2 from '../img/bruno2.jpg';
import bruno3 from '../img/bruno3.jpg';
import bruno1Thumbnail from '../img/bruno1-thumbnail.jpg';
import bruno2Thumbnail from '../img/bruno2-thumbnail.jpg';
import bruno3Thumbnail from '../img/bruno3-thumbnail.jpg';
import wedding1 from '../img/wedding1.jpg';
import wedding1Thumbnail from '../img/wedding1-thumbnail.jpg';
import wedding2 from '../img/wedding2.jpg';
import weddingAerial from '../img/wedding-aerial.jpg';
import weddingAerialThumbnail from '../img/wedding-aerial-thumbnail.jpg';
import ReactBnbGallery from 'react-bnb-gallery';
import { Redirect } from 'react-router';

const photos = [
  {photo: wedding1,
    thumbnail: wedding1Thumbnail},
  {photo: weddingAerial,
    thumbnail: weddingAerialThumbnail},
  {photo: wedding2,
    thumbnail: wedding2},
  {photo: bruno1,
    thumbnail: bruno1Thumbnail},
  {photo: bruno2,
    thumbnail: bruno2Thumbnail},
  {photo: bruno3,
    thumbnail: bruno3Thumbnail}
];

class Photos extends Component {

  state = {
    redirect: false
  }

  handleGalleryClose = () => {
    this.setState({
      redirect: true
    });
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    } 

    return (
      <ReactBnbGallery 
        photos={photos} 
        show={true} 
        onClose={this.handleGalleryClose} />
    );
  }
}

export default Photos;
