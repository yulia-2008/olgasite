import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
            <div id='component' 
                 style={window.innerWidth > 600 ? 
                    {width:'20%'}: {paddingLeft: '10px'}
                 }>            
                    <h4>Contact</h4> 
                    <p>olgasopian@gmail.com</p>                
                </div>          
        );
    }
}

export default Contact;
