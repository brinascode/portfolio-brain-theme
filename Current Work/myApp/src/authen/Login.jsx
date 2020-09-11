//Our react imports
import React, { Component } from 'react';
import { Grid } from "@material-ui/core"
import { api } from "../other_important/SharedVars.js"

//const URL = 'ws://muneeds-backend.herokuapp.com:3002'
//const URL = 'ws://muneeds-backend.herokuapp.com'
//const ws = new WebSocket(URL)


class Login extends Component {
  
  constructor(props){

		super(props)
		this.state = {
			worked:"No",
			user:[]

		}


	}

	componentDidMount() {
  
    /*
    ws.onopen = (evt) => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
   
     
    }

    ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      console.log(evt.data)
       
      //The message will be the user id first, and then the user's name
    }

    ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss ==does it work?
      this.setState({
        ws: new WebSocket(URL),
      })
    }
*/
    

	}


  loginWithGoogle(){
/*
    const xhr = new XMLHttpRequest();
      
      xhr.open('GET', "/auth/google");
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            alert("yeah")
          }
          else{
            alert('Could not get signed URL.');
          }
        }
      };
      xhr.withCredentials = true;
      xhr.send(); */

   //alert(document.cookie[0])
 
  window.location.href = api()+"/auth/google"


 
 /*
   axios.get("/auth/google")
      .then(function(response){
       // document.getElementsByTagName("html")[0].innerHTML = response.data
       //document.write("")
        console.log(response.data) //Do something with this later. Return showing them their new addition
      })
      .catch(function(error){console.log(error)}) #02bcd2"  */


      //Learning how to detect an .edu address

      
  }

  render() {
    return (
      <div>

          
               <Grid container > 
                  
                  <Grid item lg={12} md={12} sm={12} xs={12}>

                          <img  onClick={this.loginWithGoogle} src={process.env.PUBLIC_URL+ "images/icons/google-button-white.png"}></img>
                         <br></br>
                          You'll need to use a .edu email
                      
                  </Grid>
               
               </Grid>
               
         
           


      </div>
    );
  }
}

export default Login;
