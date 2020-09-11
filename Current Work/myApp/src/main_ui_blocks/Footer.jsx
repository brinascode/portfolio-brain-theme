//Our react imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Grid} from "@material-ui/core"


class Footer extends Component {
  render() {
    
    return (
   
         <Grid container> 
              <Grid item lg={12} xs={12} sm={12} md={12}
            style={{fontFamily:"moonbold",color:"white",backgroundColor:"black",height:"100%",padding:"5%",marginTop:"3%"}}>

              <Link to="/userview/about" style={{marginLeft:"-5vw",marginRight:"5vw",padding:"35px"}}>
                  <span style={{fontFamily:"Bree Serif",color:"color",fontSize:"1.5vw"}}> <b> Help </b> </span>                              
              </Link>
              Copyrights 
                  
            </Grid>
         </Grid>
      
    );
  }
}

export default Footer;

