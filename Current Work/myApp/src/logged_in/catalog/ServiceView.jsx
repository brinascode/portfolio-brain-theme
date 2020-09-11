import React from 'react';
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"
import { Row, Column, Button} from "react-foundation"
import {Grid} from "@material-ui/core"
import AppContext from "../../main_ui_blocks/AppContext.js"
//-------------------------------------------------------------------COMPONENT-----------------------------------
class ServiceView extends React.Component {
  
  constructor(props,context){
    super(props,context)
    this.state = {
      service:{name:"",otherImages:[""]},
      
    }
    this.findService = this.findService.bind(this)
    this.requestService = this.requestService.bind(this)
  }


  findService(){
    const index = this.props.location.pathname.indexOf(":")
    const productIdFixed = this.props.location.pathname.substring(index+1)
    const component = this

    axios.post(api()+"/findService",{productId:productIdFixed})
    .then(function(response){ 
          component.setState({
            service:response.data[0]
          })
        })
    .catch(function(error){console.log(error)})
  }

  requestService(){
    //First check that user has a phone number and username
    //Then service request is created

    var component = this
    var service = this.state.service
    //We make sure that the userInfo is intact, before we create the request
    //the checking should be done at the settings level
    var postObject = {
          serviceName:service.name,
          serviceId:service._id,
          sellerUsername:service.sellerUsername,
          sellerId:service.sellerId,
          seller_stripe_id:service.seller_stripe_id,
          buyerUsername:this.context.username,
          buyerId:this.context.userId,
          mainCategory:service.mainCategory,
          dateCreated:new Date()
        }  //How to prevent double requests from being created? --> you disable the button --> or make the form longer.
    
    axios.post(api()+"/createServiceRequest",postObject).then(function(response){
          alert("Your request has been sent!")
          window.location = "/userview/home"
        }).catch(function(error){
          console.log(error)
        })
    
    }   

  componentDidMount(){
    this.findService()
  }
   
  render() {

//share these instead of copying and pasting all the time
    var imgStyle = {
      boxShadow:"0px 0px 0px #888888",
      borderRadius:"px"
  }

 
  var bannerStyle= {
      boxShadow:"0px 0px px #888888",
      padding:"5%",
      height:"20vh",
      borderRadius:"5px"
     
  }
    
    const service = this.state.service

   //For resp design
   var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
   var bannerColumnPc = {margin:"10%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}
   var bannerColumnMobile2 = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%",padding:"0px"}
   var bannerColumnPc2 = { margin:"10%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}

   var itemColumnMobile = {padding:"10px",width:"100%",borderRadius:"5px"}
   var itemColumnPc = {marginTop:"4vw"}
   var innerPaddingPc = {marginLeft:"30%"}
   var innerPaddingPc2 = {marginRight:"30%"}

   var bannerColumn = {}
   var bannerColumn2 = {}
   var itemColumn = {}
   var innerPadding = {}
   var innerPadding2 = {}

   if(this.props.mobile){
       bannerColumn.style = bannerColumnMobile
       itemColumn.style = itemColumnMobile
       bannerColumn2.style = bannerColumnMobile2
   }else{
       bannerColumn.style = bannerColumnPc
       itemColumn.style = itemColumnPc
       innerPadding.style  = innerPaddingPc
       innerPadding2.style  = innerPaddingPc2
       bannerColumn2.style =  bannerColumnPc2
   }
          return (
            <div className="">
  <Row large={12} medium={12} small={12} style={{marginBottom:"2vw",textAlign:"center"}} >
               
               <Column  large={12} small={12} medium={12}  style={{borderRadius:"1vw",textAlign:"center"}}>
                       
                                   <h2 style={{fontFamily:"Archivo Black",color:"#171b1e",textAlign:"center"}}> <b>  {service.name}    </b> </h2> 
                                           <h4 style={{fontFamily:"Nunito"}}> 
                                          By:  {service.sellerUsername}   
                                           </h4>
                       
               </Column>
          
</Row>
            
            <Row large={12} medium={12} small={12} style={{borderRadius:"1vw",margin:"0"}}>
          
            

             <Column large={6} medium={12} small={12} style={itemColumn.style}>
                                <div style={innerPadding.style}>
                                    <img src={service.mainImage} style={{borderRadius:"5px"}} width="80%" />
                                </div>
                                <br></br>
             </Column>
                     
                      <Column large={6} medium={12} small={12}  style={itemColumn.style} >
                         
                                  <div style={innerPadding2.style}>
                                        <div className="catalog-item" >

                                        <button onClick={this.findService} style={{backgroundColor:"#02bcd2",borderRadius:"5px",padding:"1vw"}}>
                                              <h2 style={{color:"white"}} onClick={this.requestService}>Request this service!</h2> </button>
                        
                                                  <h4>  <br></br></h4>
                                                    <h4 style={{fontFamily:"moon"}} > <b> Description: </b> {service.description}</h4>
                                                   
                                                    <br></br>

                                              </div>
                                </div>


                            <div style={innerPadding2.style}>
                                    <br></br>
                                    <h4>    <img src={process.env.PUBLIC_URL + "/images/icons/instagram.png"} 
                                    width="7%" style={{float:"left",marginRight:"3px"}}></img> Instagram: @ {service.instagram}</h4>
                                    
                                    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                                  <iframe src="//lightwidget.com/widgets/4e33f2016d0358299d8b270b5478481b.html" 
                                  scrolling="yes" allowtransparency="true" 
                                  className="lightwidget-widget" style={{width:"100%",height:"200px",border:"0",overflow:""}}></iframe>
                            </div>
                                          
                                              
                         
                      </Column>

                      <Column large={12} medium={12} small={12}  style={bannerColumn2.style}  >
                         
                       <h2>
                        <span style={{marginLeft:"3%"}}>Portfolio</span>
                       </h2>
                       <Row large={12} medium={12} small={12} >
                           {this.state.service.otherImages.map( url =>  
                            <Column large={4} medium={4} small={6}  >
                               <img src={url}  width="50%" />
                           </Column>)}
                     
                        </Row>
                                     
                
                     </Column>

                     <Column large={12} medium={12} small={12}  style={bannerColumn2.style} >
                         
                     <h2>
                       <span style={{marginLeft:"3%"}}>Reviews</span>
                     </h2>

                       </Column>
 
    </Row>
           
            </div>
          )
       
        
  }
}
ServiceView.contextType = AppContext
export default ServiceView
