

import React from 'react';
import './App.css';
import MenuBtn from './MenuBtn.jpg';
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
              fontSize: "14px", padding: '0', margin: '1%', paddingLeft: '7px' } 
      })
   }

   showContainer = (button) => { /// function does not work 
      this.setState({
           about: {},
           resume: {},
           education: {},
           photo: {},
           video:{},
           contact: {},
           [button]:  {'clicked': true}
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

showContent=() => {
   this.setState({clicked: !this.state.clicked })
}

  render() {
    
    return( 
      window.innerWidth < 600 ? 
      <div id='main-container-mob' onClick={(e) => this.handleOverlayClicks(e)}>
         <div id='info-box-mob'>
             {Object.keys(this.state.about).length === 0 ? null: <About></About>}
             {console.log('l', Object.keys(this.state.about).length)}
         </div>
         <div id='dropdown' >            
            <img id="menubtn" src={MenuBtn} onMouseOver={this.showContent} ></img>           
            <div id="dropdown-content" style={this.state.clicked? {display: 'block'}: {display: 'none'}}>
               <p onClick={() => this.showContainer('about')}>About</p>
               <p onClick={() => this.showContainer('resume')}>Resume</p>
               <p onClick={() => this.showContainer('education')}>Education& Training</p>
               <p onClick={() => this.showContainer('photo')}>Photo</p>
               <p onClick={() => this.showContainer('video')}>Video</p>
               <p onClick={() => this.showContainer('contact')}>Contact</p>
            </div>  
         </div> 
      </div>
  :
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
               onClick={() => this.clickHandler('education')}>Education& Training</p>
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







