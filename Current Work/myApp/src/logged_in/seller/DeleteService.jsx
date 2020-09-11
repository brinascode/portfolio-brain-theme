import React from 'react';

//Routing
import { Link } from 'react-router-dom';
import {Redirect} from "react-router"
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


//-------------------------------------------------------------------COMPONENT-----------------------------------
class DeleteService extends React.Component {
  
  constructor(props){
    super(props);

  }

  componentDidMount(){

    if(window.confirm("Are you sure you want to delete this service? The action cannot be reversed.")){
      var index = this.props.location.pathname.indexOf(":")
      var id = this.props.location.pathname.substring(index+1)

      axios.post(api()+"/deleteService",{_id:id}).then(function(response){
         
      }).catch(function(error){console.log(error)})
     
      
    }

    
  }
  

  render() {

    
      
      return (
        <div> 
            <Redirect to="/userview/viewMyServicesTab"/>
        </div>
      )
    
        
  }
}




export default DeleteService

