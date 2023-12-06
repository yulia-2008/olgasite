import React, { Component } from 'react';
import OlgaRes1 from './OlgaRes1.png';
import OlgaRes2 from './OlgaRes2.png';



class Resume extends Component {
    
    render() {  
        return (
      
            <div id='component' style={{opacity: 1, padding: 0}}>
                <img id='res1' src={OlgaRes1}></img>   
                <img id='res2' src={OlgaRes2} ></img>    
               
            </div>  
            
            
                      
     
        );
    }
}

export default Resume;

