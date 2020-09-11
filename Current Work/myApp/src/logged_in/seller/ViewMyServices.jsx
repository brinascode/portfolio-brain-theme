import React from 'react';

//Routing
import { Link } from 'react-router-dom';
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"
import { Row, Column, Button} from "react-foundation"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//Inbox
import Inbox from "../user/Inbox.jsx"
//--------------------------------------------------------------COMPONENT-----------------------------------
class ViewMyServices extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        userId:sessionStorage.getItem("userId"),
        services:[""],
        serviceRequests:[""]
    }

    this.getMyServices = this.getMyServices.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.findMyServiceRequests = this.findMyServiceRequests.bind(this)

  }

  getMyServices(){
    const component = this
    axios.post(api()+"/getMyServices",{userId:this.state.userId})
    .then(function(response){
      component.setState({services:response.data.reverse()})
      console.log(component.state)
       console.log(response.data)
    }).catch(function(error){console.log(error)})
  }

  findMyServiceRequests(){
    const component = this
    axios.post(api()+"/getServiceRequests",{userType:"seller",sellerId:this.state.userId}).then(function(response){
      component.setState({serviceRequests:response.data})
    }).catch(function(error){
      console.log(error)
    })
  }

  deleteItem(e){ 
    e.stopPropagation()
    if(e.target.id === "deleteItem"){
      alert("he33y")
    } 
    if(window.confirm("Do you really want to delete this posted sale?")){
          axios.post(api()+"/deleteItem",{itemId:"itemId"})
          .then(function(response){
          }).catch(function(error){console.log(error)})
    }
  }

  componentDidMount(){
    this.getMyServices()
    this.findMyServiceRequests()
  }



  render() {
    
       
      return (
        <div className="">
        <Row >
                 <Column  large={12} small={12} medium={12} style={{marginTop:"3vw",borderRadius:"5px"}} >
                     <center> <h1 style={{fontFamily:"Nunito"}}> My Services, Requests and History </h1> </center>
                  </Column>

                  <Column large={8} small={12} medium={6} style={{marginBottom:"0%"}}>
                      <Inbox  type="seller-service-requests" data={this.state.serviceRequests}></Inbox>
                  </Column> 

                  <Column large={4} small={12} medium={6} >
                  <h4>Services</h4>
                  <div style={{height:"30vw",overflowY:"scroll"}}>
                  {this.state.services.map(service => 
                            <Column large={12} small={12} medium={12} style={{borderRight:"solid #171b1e 5px",marginBottom:"1vw",padding:"20px",borderRadius:"5px"}} >
                              <center>

                                <Link to={`/userview/deleteService:${service._id}`}>
                                      <img src={process.env.PUBLIC_URL + "/images/icons/delete.png"} width="7%" style={{float:"right"}}></img>
                                </Link>

                                <Link to={`/userview/editService:${service._id}`}>
                                          <img src={process.env.PUBLIC_URL + "/images/icons/edit.png"} width="10%" style={{float:"right"}}></img>
                                  </Link>
                                                
                                      <img src={service.mainImage} width="100px" ></img>
                                      <h4 style={{color:"black"}}> {service.name}</h4>
                                      <p> {service.mainCategory} page</p>
                                      
                              </center>
                             </Column>
                                  
                             )}
                   </div>
                  </Column> 
            </Row>
        </div>
      )
   
        
  }
}




export default ViewMyServices
