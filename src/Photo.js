import React, { Component } from 'react';
import OlgaPics from './OlgaPics.jpg';
import GalleryMobile from './GalleryMobile1.jpg';

class Photo extends Component {
    render() {
        return (
            <div id='component' style={{opacity: 1}}>          
               <img id='five-pics' src={window.innerWidth < 600 ? 
                   GalleryMobile : OlgaPics}></img>  
            </div>
        );
    }
}

export default Photo;
