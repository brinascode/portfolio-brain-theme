import React from 'react';
import { api } from "../other_important/SharedVars.js"




//-------------------------------------------------------------------COMPONENT-----------------------------------
class Logout extends React.Component {
  
  constructor(props){
    super(props)
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("profilePicture")
    sessionStorage.removeItem("phoneNumber")

    window.location.href=api()+"/logout"


  }

}




export default Logout
