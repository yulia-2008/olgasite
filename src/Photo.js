import React, { Component } from 'react';
import OlgaPics from './OlgaPics.jpg';

class Photo extends Component {
    render() {
        return (
            <div id='component' style={{opacity: 1}}>
            
            
              <img id='five-pics' src={OlgaPics} ></img>      
            </div>
        );
    }
}

export default Photo;
