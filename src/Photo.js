import React, { Component } from 'react';
import OlgaPics from './OlgaPics.jpg';
import GalleryMobile2 from './GalleryMobile2.jpg';

class Photo extends Component {
    render() {
        return (
            <div id='component-gallery'>          
               <img id='five-pics' src={OlgaPics}></img>  
            </div>
        );
    }
}

export default Photo;
