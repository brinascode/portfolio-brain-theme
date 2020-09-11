//Our react imports
import React, { Component } from 'react';
import { Grid} from "@material-ui/core"
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, InputBase, MenuIcon, Typography, Button} from "@material-ui/core"
import AppContext from "./AppContext.js"

class UserHeader extends Component {

    constructor(props,context){
        super(props,context)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.state = {loginLogOut:""}
      
    }

    componentWillMount(){
        if(this.context.contextActive){ //Determine whether the text should say login or logout
            this.setState({
                loginLogOut:"Logout"
            }) 
        }else{
            this.setState({
                loginLogOut:"Login/Signup"
            })
        }
    }

    handleButtonClick(e){
        e.target.id == "Logout" ? this.context.logout() : this.context.loginWithGoogle()
    }

  render() {
      return (
        
          <Grid container>
        
          <AppBar position={this.context.mobile} style={{backgroundColor:"white"}} className="warm-orange-gradient">
              <Toolbar>
                <Grid container>
                  <Grid item lg={9} md={3} sm={5} xs={5}>
                      <Typography variant="h4">
                        <span style={{color:"white",fontFamily:"Archivo Black"}}>The Student Market</span>
                      </Typography>
                  </Grid>
                  <Grid item lg={3} md={9} sm={7} xs={7}>
                      <Typography >
                    <Grid container spacing={5}>
                      <Grid item lg={3}>
                          <Link to="/userview/coupons" >
                              <b>Coupons</b>  
                          </Link>
                      </Grid> 
                      <Grid item lg={3}>
                          <Link to="/userview/events" >
                              <b>Events</b>  
                          </Link>
                      </Grid> 
                      <Grid item lg={3}>
                          <span style={{color:"black"}} >
                              <b onClick={this.handleButtonClick} id={this.state.loginLogOut}>{this.state.loginLogOut}</b>  
                          </span>
                      </Grid> 
                  </Grid>
                  </Typography>
                  </Grid>
                </Grid>
             
              </Toolbar>
          </AppBar>
          
          </Grid>
      
      );
    
    
    
  }
}
UserHeader.contextType = AppContext
export default UserHeader;
