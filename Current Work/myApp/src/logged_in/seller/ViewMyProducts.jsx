import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"
import {Grid,Button} from "@material-ui/core"
import Inbox from "../user/Inbox.jsx"
import AppContext from "../../main_ui_blocks/AppContext.js"
//-------------------------------------------------------------------COMPONENT-----------------------------------
class ViewMyProducts extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      products:[""],
      sales:[""],
      inboxType:"seller-sales",
      inboxData:[]
    }
    this.getMyProducts = this.getMyProducts.bind(this)
    this.getMySales = this.getMySales.bind(this)
    this.tabClick = this.tabClick.bind(this)
  }
  
  getMyProducts(){
    const component = this
      axios.post(api()+"/getMyProducts",{userId:this.context.userId})
      .then(function(response){
        component.setState({products:response.data.reverse()})
      })
      .catch(function(error){console.log(error)})
  }

  getMySales(){
    const component = this
    axios.post(api()+"/getMySales",{userId:this.context.userId}).then((response)=>{
      component.setState({sales:response.data,inboxData:response.data})
    }).catch((error)=>{
      console.log(error)
    })
  }

  tabClick(e){
    if(e.currentTarget.id == "currentSalesInboxTab"){
      this.setState({inboxType:"seller-sales",inboxData:this.state.sales})
    }else if(e.currentTarget.id == "pastSalesInboxTab"){
      if(this.state.salesArchives){
        this.setState({inboxType:"seller-sales-archives",inboxData:this.state.salesArchives})
      }else{
        var component = this
        axios.post(api()+"/getMyArchives",{userId:this.context.userId,archiveType:"sales"}).then((response)=>{
          component.setState({salesArchives:response.data,inboxType:"seller-sales-archives",inboxData:response.data})
        }).catch((err)=>{console.log(err)})
      }
    } 
  }

  componentWillMount(){
    //Loaded by default. Extra stuff like archives are loaded on a need basis
    this.getMyProducts()
    this.getMySales()
  }
 
  render() {
      return (
        <Grid container >
                <Grid lg={12}  md={12} sm={12} xs={12} style={{marginTop:"3vw",borderRadius:"5px"}} > 
                  <center>  
                     <h1 style={{fontFamily:"Nunito"}}> My Products and Sales History </h1> 
                  </center>
                </Grid>

                <Grid lg={6} md={6} sm={12} xs={12} >
                    <div>
                    <Button className="blue-button" color="default" variant="outlined" onClick={this.tabClick} id="currentSalesInboxTab">Current Sales</Button>
                    <Button className="blue-button" color="default" variant="outlined" onClick={this.tabClick} id="pastSalesInboxTab">Past Sales</Button>
                    <br></br><br></br>
                    <Inbox type={this.state.inboxType} data={this.state.inboxData}/>
                    </div>
                 </Grid>

                <Grid lg={6} md={6} sm={12} xs={12}  >
                    <div style={{overflowY:"scroll",height:"100vh"}}>
                        <h4 style={{fontFamily:"Nunito",fontSize:"4vh"}}> Products on sale  </h4>
                            Here you can edit or delete products.   
                        <Grid container>
                          {this.state.products.map( product => 
                            <Grid lg={12} md={6} sm={12} xs={12} style={{borderBottom:"solid 1.5px",marginTop:"3px",borderRight:"solid black"}}>
                              <center>
                                <h4>{product.name}</h4>
                                <p style={product.quantity == 0 ? {color:"red"}:{color:"green"}}>
                                  Available: {product.quantity == 0 ? "0. Your item is unlisted ":product.quantity}
                                </p>
                                <Link to={`/userview/editProduct:${product._id}`}>
                                  <img src={process.env.PUBLIC_URL + "/images/icons/edit.png"} width="10%" style={{float:"left"}}></img>
                                </Link>
                                <Link to={`/userview/deleteProduct:${product._id}`}>
                                  <img src={process.env.PUBLIC_URL + "/images/icons/delete.png"} width="7%" style={{float:"right"}}></img>
                                </Link>
                                  <img src={product.mainImage} width="100px" ></img>
                              </center>               
                              </Grid>
                          )}
                        </Grid>
                    </div>
                 </Grid>   
        </Grid>
      )
    
        
  }
}
ViewMyProducts.contextType = AppContext
export default ViewMyProducts
