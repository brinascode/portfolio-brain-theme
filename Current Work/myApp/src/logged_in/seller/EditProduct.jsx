
import React from 'react';

//Routing
import {Route, Switch} from "react-router";
import { Link } from 'react-router-dom';

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class EditProduct extends React.Component{

constructor(props){
    super(props)
    this.state = {}
 
}


componentWillMount(){  //Receiving the state (item info) from the parent
    this.setState(this.props.state)
    this.handleChange = this.props.functions.handleChange
    this.handleChangeArray = this.props.functions.handleChangeArray
    this.submitForm = this.props.functions.submitForm

}

render(){

   //For resp design
   var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
   var bannerColumnPc = {margin:"15%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}
   
   var itemColumnMobile = {padding:"10px",width:"100%",borderRadius:"5px"}
   var itemColumnPc = {backgroundColor:""}
   var innerPaddingPc = {marginLeft:"20%",marginRight:"15%"}

   var bannerColumn = {}
   var itemColumn = {}
   var innerPadding = {}

   if(this.props.mobile){
       bannerColumn.style = bannerColumnMobile
       itemColumn.style = itemColumnMobile
   }else{
       bannerColumn.style = bannerColumnPc
       itemColumn.style = itemColumnPc
       innerPadding.style  = innerPaddingPc

   }
   

    return (
    
        
      
                  <div >
                  <center> 
                      <h4 style={{fontFamily:"Nunito",fontSize:"5vh"}}>
                      <img src={this.props.state.mainImage} style={{borderRadius:"5px"}} width="10%" /> Main Details</h4>  
                     
                   </center>
                          <form>
                            <label style={{fontFamily:"Nunito",fontSize:"3vh"}}> Product Name or Name of textbook <br></br>
                                <input style={{width:"100%"}}
                                name="name"
                                type="text" 
                                value={this.props.state.name} 
                                onChange={this.handleChange}
                                placeholder={this.props.state.name}/> 

                            
                            </label>

                            <label style={{fontFamily:"Nunito",fontSize:"3vh"}}> Main Category <br></br>
                              <select style={{width:"100%"}}
                              name="mainCategory"
                              type="select"
                              value={this.props.state.mainCategory}
                              onChange={this.handleChange}>
                                    <option>textbooks</option>
                                    <option>other</option>
                                
                              </select>

                              
                            </label>

                          

                            <label style={{fontFamily:"Nunito",fontSize:"3vh"}}>Description<br></br>
                            
                                    <textarea style={{width:"100%"}}
                                    name="description"
                                    type="textarea"
                                    value={this.props.state.description}
                                    onChange={this.handleChange}
                                    placeholder="If your item is a textbook, include the name of the author and other important references."
                                    />
                                    
                            </label>


                            <label style={{fontFamily:"Nunito",fontSize:"3vh"}}>Price ($) <br></br>
                              <input style={{width:"100%"}}
                              name="price"
                              type="number"
                              value={this.props.state.price}
                              onChange={this.handleChange}
                              />
                            
                            </label>


                            <label style={{fontFamily:"Nunito",fontSize:"3vh"}}>Number Available
                            <br></br>
                              <input style={{width:"100%"}}
                              name="quantity"
                              type="number"
                              value={this.props.state.quantity}
                              onChange={this.handleChange}
                              />
                            </label>


                            <label style={{fontFamily:"Nunito",fontSize:"3vh"}}>Tags for search
                            <p style={{fontFamily:"moon",fontSize:"1.8vh"}}>
                            Enter keywords to help people find this service or product faster. Do not add hashtags or separate them with commas. </p> 
                                <textarea style={this.formStyle}
                                name="tags"
                                type="textarea"
                                value={this.props.state.tags}
                                onChange={this.handleChange}
                                placeholder=""
                                />
                            </label>


                          </form>

                          <center><button onClick={this.submitForm} 
                          style={{backgroundColor:"#02bcd2",fontSize:"3vh",borderRadius:"5px",padding:"1vw"}}>
                          Save changes</button></center>
                    </div>

              
        
  
    )

}

}

export default EditProduct