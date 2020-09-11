import React, {useContext,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import AppContext from "./AppContext.js"
import {Row,Column} from "react-foundation"

class NewSideBar extends React.Component{

  constructor(props,context){
    super(props,context)
    this.state = { //The styling vars we pass to context 
      desktop:{
        type:"desktop",
        fontSize:"3.3vw",
        color:"#171b1e",
        fontFamily:"Nunito",
        showProfilePic:"visible",
        topHeight:"auto"
      },
       mobile:{
        type:"mobile",
        fontSize:"10vw",
        color:"white",
        fontFamily:"Nunito",
        showProfilePic:"hidden",
        topHeight:"0px"
      }
     
    }
  }

 componentWillMount(){
    this.context.setInitialStyles(this.state.mobile,this.state.desktop,"NewSideBar")
 }

 componentWillUpdate(){
   this.context.responsiveDesign(this.state.mobile,this.state.desktop,"NewSideBar")
 }


  render(){
    return (
      <div>
                    <Row large={12} small={12} medium={12}>
                        <center style={{height:this.context.styles["NewSideBar"].topHeight,visibility:this.context.styles["NewSideBar"].showProfilePic}}>   
                            <img src={this.props.profilePicture} width={100}
                                style={{borderRadius:"400% 400% 200% 200%",boxShadow:"3px 3px 6px #37ecba"}}/>
                            <br></br>
                            <b> {this.props.name} </b>
                            <br></br>
                            @{this.props.username}
                            <br></br>
                            <br></br><br></br>
                        </center>
                  </Row>

                   <Row large={12} small={12} medium={12}>
                           <Column large={12} small={6} medium={12} style={this.context.styles["NewSideBar"]}>
                              <Link to='/userview/home' >    
                                <center style={{color:this.context.styles["NewSideBar"].color,fontSize:this.context.styles["NewSideBar"].fontSize}}> Home </center>
                              </Link>
                           </Column>

                           <Column large={12} small={6} medium={12} style={this.context.styles["NewSideBar"]}>
                                 <Link to='/userview/catalog'  >
                                    <center style={{color:this.context.styles["NewSideBar"].color,fontSize:this.context.styles["NewSideBar"].fontSize}}> Buy</center>
                                 </Link>
                           </Column>

                           <Column large={12} small={6} medium={12} style={this.context.styles["NewSideBar"]}>
                              <Link to='/userview/sell' >
                                 <center style={{color:this.context.styles["NewSideBar"].color,fontSize:this.context.styles["NewSideBar"].fontSize}}> Sell</center>
                              </Link>
                           </Column>

                           <Column large={12} small={6} medium={12} style={this.context.styles["NewSideBar"]}>
                              <Link to='/userview/settings' > 
                                <center style={{color:this.context.styles["NewSideBar"].color,fontSize:this.context.styles["NewSideBar"].fontSize}}> Settings</center>
                              </Link>
                           </Column>
                   </Row>         
  </div>
  );
  } 
}
NewSideBar.contextType = AppContext
export default NewSideBar;

