import React from 'react';
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"
import {Grid} from "@material-ui/core"
import AppContext from "../../main_ui_blocks/AppContext.js"
//-------------------------------------------------------------------COMPONENT-----------------------------------
class Settings extends React.Component {
  constructor(props){
    super(props)

    this.checkUserInfo = this.checkUserInfo.bind(this);
    this.getStripeInfo = this.getStripeInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitChanges2 = this.submitChanges2.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.validation = this.validation.bind(this)
    this.handleImages = this.handleImages.bind(this);
    this.id = sessionStorage.getItem("userId")
    this.createStripeAccount = this.createStripeAccount.bind(this)
    this.viewStripeDashboard = this.viewStripeDashboard.bind(this)
    this.paymentButtonClick = this.paymentButtonClick.bind(this)

    this.state = {
      _id:sessionStorage.getItem("userId"),
      username:"username",
      name:"",
      phoneNumber:0,
      profilePicture:sessionStorage.getItem("profilePicture"),
      url:"",
      validation:"",
      stripeStatus:false,
      accountStatus:"", // True or False: Is this a first time login or not? IF user is logging in for the first time, they must set up their info.
      accountStatusStyle: { marginBottom:"2vw",textAlign:"center",visibility:"hidden"},
      paymentButtonText:"",
      uploadPhotoDisabled:true,
    }
  }

  checkUserInfo(){ //rename this to checkUserInfo
     /* Will get us the user info of the user. If the user's account info is empty, we set accountStatus to false, meaning it's a first time user. 
                  Users MUST have their info set up before they use the app.
                  getUserInfo will populate the fields of the form and then return true if the user.moreInfo is complete,
                  or return false if its not, from which we determine that this is a first time login!*/
    const component = this
    const _id = sessionStorage.getItem("userId")
    var userInfo = {
      userId: this.context.userId,
      name:this.context.name,
      username:this.context.username,
      phoneNumber:this.context.phoneNumber,
      profilePicture:this.context.profilePicture
    }
    let obj = userInfo
    for(var i in obj){ //We make sure the user info data returned by the request (user.moreInfo) has all the key fields we need
        if (obj[i] == null || obj[i]== undefined || obj[i].length == 0 || obj[i] == ""){ 
          component.setState({_id:_id, accountStatus:false,paymentButtonText:"Set up payment information" })
          return false
        }
    }
    component.setState({_id:userInfo.userId,username:userInfo.username,phoneNumber:userInfo.phoneNumber,name:userInfo.name,accountStatus:true,paymentButtonText:"View Account Dashboard"})
    return true
  }

  handleChange(e){
    var name = e.target.name
    var value = e.target.value
    if(name === "username"){
       this.setState({username:value})
    }else if(name === "phoneNumber"){
       this.setState({phoneNumber:value})
    }
  }


  validation(){
     if(this.state.username.length !== 0 && (this.state.phoneNumber.length !== 10) ){//do better validation later.. cause empty space is not the only wrong thing
      // next the server must check that there's only one of this username, and that the phone number works
      this.setState({validationMessage:"Please make sure you enter a valid username, phone number and a profile picture uploaded before clicking submit!"})
     }
     else{ 
      this.submitChanges2()
     }
  }

  submitChanges2(){
    const component = this 
         axios.post(api()+"/editUserInfo",
             {_id:this.state._id,username:this.state.username,phoneNumber:this.state.phoneNumber}
         ).then(function(response){ //need verification for this to happen only if post is successful 
            sessionStorage.setItem("username", response.data.username);
            sessionStorage.setItem("phoneNumber", response.data.phoneNumber);
            sessionStorage.setItem("profilePicture", response.data.profilePicture);
            window.location.reload()   //will force userView to rerender/reupdate here so that the sidebar can change its details, after it updates sessionStorage too
          }).catch(function(error){
            console.log(error)
        })

  }

  
  handleImages(e){
    const component = this
    //Getting the file once user selects it (uploads it to CLIENT) / once there's a change
    const files = e.target.files
    const file = files[0];
    if(file == null){
      return alert('No file selected.');
    }
    getSignedRequest(file);
    this.setState({uploadPhotoDisabled:false})
    //We request a signature from the server
    function getSignedRequest(file){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', api()+`/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                      const response = JSON.parse(xhr.responseText);
                      component.setState({imageFile:file,imageResponse:response,url:response.url,signedRequest:response.signedRequest})
                      document.getElementById('preview').src = response.url; //dont confuse this url for the response.url
                }
                else{
                    alert('Could not get signed URL.');
                }
            }
        };
        xhr.send();
    }
}

paymentButtonClick(e){

  if(e.target.id == "Set up payment information"){
    this.createStripeAccount()
  }else if(e.target.id == "View Account Dashboard"){
    this.viewStripeDashboard()
  }
}


//Gets called after Submit Button is clicked
uploadFile(){
      const component = this
      var file = this.state.imageFile
      var signedRequest = this.state.signedRequest
      var url = this.state.url

      if(file === "" || url === ""){ //aka The value from the stateHelper has never been changed
          alert("No file to upload")
      }else{
        
      //We upload image to AWS Bucket
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
              axios.post(api()+"/changeProfilePicture",{_id:this.state._id,url:this.state.url})
              .then(function(response){
                if(response.data.message == "okay"){
                  component.setState({profilePicture:url})
                  //We reupdate our sessionStorage as well
                  sessionStorage.setItem("profilePicture", url);
                  window.location.reload()
                  //affecting the parent's state --. userview, so that updated image shows on sidebar
                 component.handleStateChange({profilePicture:url})
                }else{
                  alert("Could not change your profile picture. Please try again.")
                }
              }).catch(function(error){
                console.log(error)
              })
          }
          else{
            alert('Could not upload file.');
          }
        }
      };
      
      xhr.send(file);
    }
}


//Stripe
getStripeInfo(){
  const component = this
  const _id = sessionStorage.getItem("userId")
  axios.post(api()+"/getStripeInfo",{_id:_id}).then(function(response){
    if(response.data.stripe_user_id.length > 0){
      component.setState({stripeStatus:true})
    }else{
      component.setState({stripeStatus:false})
    }
  }).catch(function(error){
      console.log(error)
    })
}

createStripeAccount(){
  window.location.href = api() + "/createStripeConnectedAccount"
}

viewStripeDashboard(){
  window.location.href = api() + "/access_stripe_dashboard"

}


componentWillMount()
  {
    this.checkUserInfo()
    this.getStripeInfo()
  }

  render() {
    return (
        <div>
              <Grid style={{marginBottom:"2vw",textAlign:"center"}} >
                  <Grid  lg={12} sm={12} xs={12} md={12}  style={{borderRadius:"1vw",textAlign:"center"}}>  
                      <h2 style={{fontFamily:"Archivo Black",color:"#171b1e",textAlign:"center"}}> <b> Settings </b> </h2> 
                         <h4 style={{fontFamily:"Nunito"}}> 
                            You can edit your user information here. Scroll down to set up your payment information.
                         </h4>

                         <h4 style={this.state.accountStatusStyle}> 
                           Set up your UniNeeds account to get started! 
                        </h4>  
                  </Grid>                  
              </Grid>

              <Grid container>
                  <Grid lg={6} sm={12} md={6} xs={12} style={{borderRight:"solid black"}}> 
                    <center>     
                      <label style={{color:"red"}}>
                        {this.state.validationMessage}
                      </label>
                        <h1 style={{fontFamily:"Nunito",color:"#171b1e"}}>
                            User Info
                          </h1>
                        <label  style={{fontFamily:"Nunito",fontSize:"3vh"}}> 
                              Name <br></br>
                              <input defaultValue={this.state.name} style={{width:"60%"}}/>
                          </label>
                          <label  style={{fontFamily:"Nunito",fontSize:"3vh"}}> 
                            Username
                              <input type="text" 
                              value={this.state.username }
                              onChange={this.handleChange}
                              name="username"
                              style={{width:"60%"}}/>
                          </label>                              
                        <label  style={{fontFamily:"Nunito",fontSize:"3vh"}}>
                          Phone Number
                              <input 
                              type="number" 
                              value={this.state.phoneNumber }
                              onChange={this.handleChange}
                              name="phoneNumber"
                              style={{width:"60%"}}/>                                        
                        </label>
                        <button onClick={this.validation} 
                                style={this.context.styles.shared.blueButton}>
                          Save 
                        </button>
                        <br></br>
                        <h1 style={{fontFamily:"Nunito",color:"#171b1e"}}> 
                           Payment information 
                        </h1>
                        <label style={{fontSize:"1.4vw"}}>Set up your pay information to sell items and or offer services through UniNeeds!</label>
                        <button onClick={this.paymentButtonClick}  id={this.state.paymentButtonText} style={this.context.styles.shared.blueButton}>
                              {this.state.paymentButtonText}
                        </button>             
                      
                      </center>
                  </Grid>
 
                  <Grid  lg={6} sm={12} md={6} xs={12}>
                    <center>
                        <form>
                          <h1 style={{fontFamily:"Nunito",color:"#171b1e"}}> 
                               Profile Picture
                          </h1>
                          Current picture: <br></br>
                          <img src={this.state.profilePicture} width="40%"></img>
                          <br></br><br></br>
                          <input type="file" id="file-input" onChange={this.handleImages}/>
                          <img id="preview" src="/images/default.png" width="25%"/>
                        </form>
                        <br></br>
                        <button onClick={this.uploadFile} 
                                style={this.context.styles.shared.blueButton} disabled={this.state.uploadPhotoDisabled}>
                                  Upload 
                        </button>  
                    </center>    
                  </Grid>                                        
                 
              </Grid>

            </div>
          )
    }
}
Settings.contextType = AppContext
export default Settings
