import React from 'react';
import { Grid, Button } from "@material-ui/core"
import { api } from "../../other_important/SharedVars.js"
import "./UserHomeStyle.css";
import AppContext from "../../main_ui_blocks/AppContext.js"
import Inbox from "./Inbox.jsx"
const axios = require("axios")


//-------------------------------------------------------------------COMPONENT-----------------------------------
class UserHome extends React.Component {
constructor(props,context){
  super(props,context)
  this.state = {
    serviceRequests:[""],
    purchases:[""],
    inboxType:"buyer-purchases",
    inboxData:[""]
  }
  this.getServiceRequests = this.getServiceRequests.bind(this)
  this.getMyPurchases = this.getMyPurchases.bind(this)
  this.getPurchasesArchives = this.getPurchasesArchives.bind(this)
  this.tabClick = this.tabClick.bind(this)
}


getMyPurchases(){
  var component = this
     axios.post(api()+"/getMyPurchases",{buyerId:this.context.userId}).then((response)=>{
        component.setState({purchases:response.data,inboxData:response.data}) //By default this.state.inboxType is user-purchases so we also need to feed the data. Since this function is only called once at componentDidMount we're good
      }).catch((error)=>{
        console.log(error) 
      })
}

getPurchasesArchives(){
 
}

getServiceRequests(){
  const component = this
  axios.post(api()+"/getServiceRequests",{userType:"buyer",buyerId:this.context.userId}).then(function(response){
      component.setState({serviceRequests:response.data})
  }).catch(function(error){
    console.log(error)
  })
}


tabClick(e){
  if(e.currentTarget.id === "purchasesInboxTab"){
    this.setState({inboxType:"buyer-purchases",inboxData:this.state.purchases})
  }else if(e.currentTarget.id === "serviceRequestsInboxTab"){
    this.setState({inboxType:"buyer-service-requests",inboxData:this.state.serviceRequests})
  }else if(e.currentTarget.id === "purchasesArchivesInboxTab"){
    //If we already have the data,
    if(this.state.purchasesArchives){
      this.setState({inboxType:"buyer-purchases-archives",inboxData:this.state.purchasesArchives})
    }else{
      var component = this
      axios.post(api()+"/getMyArchives",{userId:this.context.userId,archiveType:"purchases"}).then((response)=>{
        component.setState({purchasesArchives:response.data,inboxType:"buyer-purchases-archives",inboxData:response.data})
      })
    }

  }
}

componentWillMount(){
  //We only get this information initially. We get the rest of the data (archives) only when the user clicks/looks for it.
  this.getMyPurchases()
  this.getServiceRequests()
}

  render() {
        return (
          <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12} style={{marginBottom:"2vw",textAlign:"center"}} >
                            <Grid  lg={12}  md={12} sm={12} xs={12}  style={{borderRadius:"1vw",textAlign:"center"}}>    
                              <h2 style={{fontFamily:"Archivo Black",color:"#171b1e",textAlign:"center"}}> 
                                <b> Home </b> 
                              </h2> 
                              <h4 style={{fontFamily:"Nunito"}}> 
                                  You can manage your purchases and bookings here. 
                                  <br></br>
                                  Click messages in your inbox to open.
                              </h4>
                            </Grid>
              </Grid>

            <Grid item style={{borderRadius:"1vw"}} lg={12} md={12} sm={12} xs={12} >
               <Button className="blue-button" color="default" variant="outlined" onClick={this.tabClick} id="purchasesInboxTab">Purchases</Button>
               <Button className="blue-button" color="default" variant="outlined" onClick={this.tabClick} id="serviceRequestsInboxTab">Bookings</Button>
               <Button className="blue-button" color="default" variant="outlined" onClick={this.tabClick} id="purchasesArchivesInboxTab">Past Purchases</Button>
               <Inbox type={this.state.inboxType} data={this.state.inboxData}></Inbox>    
            </Grid>
          </Grid>
        )
  }
}
UserHome.contextType = AppContext
export default UserHome
