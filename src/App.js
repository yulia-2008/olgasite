

import React from 'react';
import './App.css';

import About from './About';
import Resume from './Resume';
import Education from './Education';
import Photo from './Photo';
import Video from './Video';
import Contact from './Contact';
//import { HashRouter, Route} from 'react-router-dom';


class App extends React.Component {

  state={
    about: {},
    resume: {},
    education: {},
    photo: {},
    video:{},
    contact: {},
    // dropdownStyle: {},
    clicked: false
}

clickHandler = (button) => {

     this.setState({
          about: {},
          resume: {},
          education: {},
          photo: {},
          video:{},
          contact: {},
          [button]: {
              fontSize: "23px", padding: '0', margin: '1%' } 
      })
   }
    
handleOverlayClicks = (e) => {
   if(e.target.parentNode.id != 'menu-box'){
      this.setState({
         about: {},
         resume: {},
         education: {},
         photo: {},
         video:{},
         contact: {}
      })  
   }
}

  // if(window.innerWidth < 600) {
      
  //     this.setState({
  //         dropdownStyle: {
  //             display: "none"
  //         }
  //     })            
  // }


  render() {
    
    return(  
      <div id='main-container' onClick={(e) => this.handleOverlayClicks(e)}>
         <div id='picture'>
           <div id='info-box'>      
           {Object.keys(this.state.about).length === 0 ? null : <About></About>}  
           {Object.keys(this.state.resume).length === 0 ? null : <Resume></Resume>} 
           {Object.keys(this.state.education).length === 0 ? null : <Education></Education>} 
           {Object.keys(this.state.photo).length === 0 ? null : <Photo></Photo>} 
           {Object.keys(this.state.video).length === 0 ? null : <Video></Video>} 
           {Object.keys(this.state.contact).length === 0 ? null : <Contact></Contact>}    
           </div>
         </div>  
         <div id='menu-box'> 
        
            <p style={this.state.about}
               onClick={() => this.clickHandler('about')}>About</p>
            <p style={this.state.resume}
               onClick={() => this.clickHandler('resume')}>Resume</p>
            <p style={this.state.education}
               onClick={() => this.clickHandler('education')}>Education & Training</p>
            <p style={this.state.photo}
               onClick={() => this.clickHandler('photo')}>Photo</p>
            <p style={this.state.video}
               onClick={() => this.clickHandler('video')}>Video</p>
            <p style={this.state.contact}
               onClick={() => this.clickHandler('contact')}>Contacts</p>
           
        </div> 
      </div>
    )  
  };
}

export default App;







