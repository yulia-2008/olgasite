import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Olga1 from './Pictures/Olga1.jpg';

class NavBar extends Component {
    // state={
    //     aboutStyle: {},
    //     projectsStyle: {},
    //     educationStyle: {},
    //     blogStyle: {},
    //     contactStyle: {},
    //     dropdownStyle: {},
    //     clicked: false
    // }

    // clickHandler = (style) => {
    //     if(window.innerWidth > 600) {
    //        this.setState({
    //             aboutStyle: {},
    //             projectsStyle: {},
    //             educationStyle: {},
    //             blogStyle: {},
    //             contactStyle: {}
    //         })
    //         this.setState({
    //             [style]: {
    //                 fontSize: "23px", 
    //                 backgroundColor: "rgb(224, 182, 43)", 
    //                 border: "1px solid black", 
    //                 borderRadius: "5px"}   
    //         }) 
    //     } 
    //     if(window.innerWidth < 600) {
            
    //         this.setState({
    //             dropdownStyle: {
    //                 display: "none"
    //             }
    //         })            
    //     }
    // }

    // resetStyle =() => {
    //     // on mouse over get back to css style, so the contect can be visible 
    //         this.setState({dropdownStyle: {} })
    // }


    render() {
        return (          
                <div>                 
                    
                    
                    <h>NAVBAR</h>
                </div> 
             
        );
    }
}

export default NavBar;

// <div  id="post-containers"  style={this.state.styleObj}  >
// this.setState({clicked: true, styleObj: {border: "3px solid rgb(172, 171, 171)", backgroundColor: "lightgrey"}})