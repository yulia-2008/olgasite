import React, { Component } from 'react';
import OlgaRes1 from './OlgaRes1.png';
import OlgaRes6 from './OlgaRes6.png';



class Resume extends Component {
    
    render() {  
        return (   
            <div id='component' 
                 style={window.innerWidth > 600 ?
                     {opacity: 1, padding: 0, marginTop: '-150px'}: {}
                 }>
                <img id='resume' src={OlgaRes1}></img>   
                <img id='resume' src={OlgaRes6} ></img>            
            </div>     
        );
    }
}

export default Resume;

