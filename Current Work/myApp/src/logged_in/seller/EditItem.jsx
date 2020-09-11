import React from 'react';

//Routing
import { Link } from 'react-router-dom';
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"

//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column, Button} from "react-foundation"

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { throws } from 'assert';


//For image edits
import EditProduct from "./EditProduct.jsx"
import EditService from "./EditService.jsx"

//-------------------------------------------------------------------COMPONENT-----------------------------------
class EditItem extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      name:"",
      mainCategory:"textbooks", // Higher level is either textbooks or other stuff. 
      subCategories:[], //using different sections to identify item. Ex: ['dorm','girls',"boys",] etc. This  will be used for filters, hashtags etc
      //subCategory:"", //a helper variable to work with checkboxes                
      description:"",
      tags:"",
      price:5,
      quantity:1, //listed in the UI as number
      mainImage:"hi", //a url
      otherImages:[""],
      sellerId:sessionStorage.getItem("userId"),
      datePosted:new Date(),
      product:[],
      message1:" ",
      showProduct:"none",
      showService:"none",
      show:false
    }

    this.stateHelper = {
      imageFile:"",
      signedRequest:{},
      url:""

    }

    this.getMyProduct = this.getMyProduct.bind(this)
    this.getMyService = this.getMyService.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArray = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleImages = this.handleImages.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.changeMainImage = this.changeMainImage.bind(this)
    this.deleteImage = this.deleteImage.bind(this)
  }


  getMyProduct(){
    var path = this.props.location.pathname
    var index = path.indexOf(":")
    var id = path.substring(index+1)
  
  
    const component = this
     
      axios.post(api()+"/getMyProduct",{_id:id})
      .then(function(response){
        var product = response.data[0]
       
        component.setState({ 
            _id:id,
            name:product.name,
            mainCategory:product.mainCategory,
            description:product.description,
            tags:product.tags,
            price:product.price,
            quantity:product.quantity, //listed in the UI as number
            mainImage:product.mainImage, //the url
            otherImages:product.otherImages
            })
      
      })
      .catch(function(error){console.log(error)})
  }


  getMyService(){
    var path = this.props.location.pathname
    var index = path.indexOf(":")
    var id = path.substring(index+1)
  
    const component = this
     
      axios.post(api()+"/getMyService",{_id:id})
      .then(function(response){
        var service = response.data[0]
       
        component.setState({ 
            _id:id,
            name:service.name,
            mainCategory:service.mainCategory,
            description:service.description,
            tags:service.tags,
            mainImage:service.mainImage, //the url
            otherImages:service.otherImages
            })
     
      })
      .catch(function(error){console.log(error)})
  }


  componentWillMount(){
      //Deciding which view to load -- product or service?

    if(this.props.type==="product"){
      this.getMyProduct()
      this.setState({showProduct:"inline"})
    }else if(this.props.type === "service"){
      this.getMyService()
      this.setState({showService:"inline"})
    }
       
  }
 
  //Getting the file once user selects it (uploads it to CLIENT) / once there's a change
  handleImages(e){
    const component = this
    const files = e.target.files
    const file = files[0];

    if(file == null){
      return alert('No file selected.');
    }
    getSignedRequest(file);
    //We request a signature from the server
    function getSignedRequest(file){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', api()+`/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                      const response = JSON.parse(xhr.responseText);
                          component.stateHelper={imageFile:file,signedRequest:response.signedRequest,url:response.url} //but all of this is going to EditItems!!
                          document.getElementById('preview').src = response.url; //dont confuse this url for the response.url
                }
                else{
                  alert('Could not get signed URL.');
                }
            }
        };
        xhr.send(); //this is when the request actually gets sent! The top part is just 'defining/definitions of stuff
    }   
}



//Gets called after Submit Button is clicked
uploadFile(){

  var file = this.stateHelper.imageFile
  var signedRequest = this.stateHelper.signedRequest
  var url = this.stateHelper.url

  if(file == ""){ //aka The value from the stateHelper has never been changed
      alert("No file to upload")
  }else{
    

  //We upload image to AWS Bucket
  const xhr = new XMLHttpRequest();
  const component = this
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
          component.setState(prevState => ({ //isolate this for my documentation ...coding practices
            otherImages: [...prevState.otherImages, url] //adding the image to the end of our otherImages array
          }))  
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  
  xhr.send(file);

          if(this.props.type === "product"){
              //Then we post the update to our backend
              axios.post(api()+"/editProduct",this.state) //the issue is that it also sends the form!! 
                      .then(function(response){

                        //Clearing our stateHelper
                          component.stateHelper = {
                            imageFile:"",
                            signedRequest:{},
                            url:""
                      
                          }
                          
                        
                      })
                      .catch(function(error){console.log(error)})

              //Then we refresh the page to reflect that update
              this.getMyProduct()}
          
              else if(this.props.type === "service"){
            //Then we post the update to our backend
            axios.post(api()+"/editService",this.state) //the issue is that it also sends the form!! 
            .then(function(response){

              //Clearing our stateHelper
                component.stateHelper = {
                  imageFile:"",
                  signedRequest:{},
                  url:""
            
                }
                
              
            })
            .catch(function(error){console.log(error)})

              //Then we refresh the page to reflect that update
            this.getMyService()

           }
 
  } 
}

changeMainImage(e){
const component = this

    axios.post(api()+"/changeMainImage",{_id:this.state._id,mainImage:e.target.id,type:this.props.type}).then(function(response){
      var image = response.data.mainImage
   
      component.setState({mainImage:image})
     
    }).catch(function(error){console.log(error)})
}

deleteImage(e){
//Prevent it from deleting everything? --> doesnt matter honestly

  const component = this
  var url = e.target.id.substring(1) //a workaround because we can't use the id property twice in html. Check the html and you'll understand
  
  
    axios.post(api()+"/deleteItemImage",{_id:this.state._id,url:url,type:this.props.type}).then(function(response){
      component.setState({message1:""})
      var otherImages = response.data.otherImages
      component.setState({otherImages:otherImages})
    }).catch(function(err){
      console.log(err)
  
    })
  
  

}




//Functions that are passed to childForms: EditProduct and EditServices
handleChange(event){
  const target = event.target
  const value = target.type === "checkbox" ? target.checked : target.value
  const name = target.name
  
  this.setState({[name]:value})
}

handleChangeArray(event){
 
  
  const target = event.target
  const value = target.type === "checkbox" ? target.checked : target.value
  const name = target.name
  
  this.setState(prevState => ({
    subCategories: [...prevState.subCategories, name,value] 
    //make sure that in database, we start saving from subCategories[1] instead of 0
  }))
 
}

submitForm(){
  
  //Post function
  //Pass to decide whether or not form is complete.
  //Next: make sure it's also the proper type

  var pass = true //Validation - checking every field
  for(var key in this.state){
    if(this.state[key] !== "otherImages" && (this.state[key] === "" || this.state[key] === 0) ){ //if anything else but the otherImages array is empty
      alert("Please complete the form");
      pass = false
      break;
    }
  }

  
  if(pass){ //If validation succeeded

    if(window.confirm("Are you sure you want to make these changes?")){
   
      if(this.props.type === "product"){
          axios.post(api()+"/editProduct",this.state)
              .then(function(response){            
              })
              .catch(function(error){console.log(error)})
            window.location.href = "/userview/viewMyProductsTab" 
      }
      else if(this.props.type ==="service"){
          axios.post(api()+"/editService",this.state)
            .then(function(response){            
            })
            .catch(function(error){console.log(error)})
          window.location.href = "/userview/viewMyServicesTab" 
      }

      }

    }
    
  }


  render() {

      //For resp design
      var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
      var bannerColumnPc = {margin:"15%",marginTop:"10%",marginBottom:"3%",borderRadius:"5px"}
      
      var itemColumnMobile = {padding:"10px",width:"100%",borderRadius:"5px"}
      var itemColumnPc = {backgroundColor:""}
      var innerPaddingPc = {marginLeft:"15%",marginRight:"15%"}
 
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
          <div className="">
  
          <Row large={12} medium={12} small={12} >
        
        
                  <Column  large={12} small={12} medium={12} style={{marginTop:"3vw"}}>
                    <center>  <h1 style={{fontFamily:"Nunito",color:"black"}}> 
                        <img src={process.env.PUBLIC_URL + "/images/icons/edit.png"}
                        width="8%" style={{float:"inherit "}}></img> Editing: {this.state.name} </h1>
                    </center>
                   </Column>
             
                   <Column large={6} small={12} medium={6}>
                  <div style={{display:this.state.showProduct}}>
                      <EditProduct state={this.state} 
                          functions={{
                            handleChange:this.handleChange,
                            handleChangeArray:this.handleChangeArray,
                            submitForm:this.submitForm
                          }}>
                      </EditProduct>
                  </div>
  
                  <div style={{display:this.state.showService}}>
                      <EditService state={this.state} 
                          functions={{
                            handleChange:this.handleChange,
                            handleChangeArray:this.handleChangeArray,
                            submitForm:this.submitForm
                          }}>
                      </EditService>
                 </div>
                 </Column>
  
  
                  <Column  large={6} small={12} medium={6}  >
                  <center>
                  <div >
                 
                      <center> <h3 style={{fontFamily:"Nunito",fontSize:"5vh"}}>Images</h3> </center>
                    
                        <Row>
  
                        <Column  large={6} small={12} medium={6}  >
  
                        <h4 style={{fontFamily:"Nunito",fontSize:"3vh"}}>Your main image</h4>
                          <p>Click on the  
                            <img src={process.env.PUBLIC_URL + "/images/icons/crown.png"} width="8%"></img>
                           icon to make an image your main.</p>
                          <img src={this.state.mainImage} style={{borderRadius:"5px",border:"solid #00c3ff"}} width="30%" />
                          <br></br><br></br>
                       </Column>
  
                       <Column  large={6} small={12} medium={6}  >
  
                       <h4 style={{fontFamily:"Nunito",fontSize:"3vh"}}>Upload more images</h4>
                          <input type="file" id="file-input" onChange={this.handleImages}/>
                          <img id="preview" src="/images/default.png" width="25%"/>
  
                        
                          <button 
                            onClick={this.uploadFile} 
                                style={{color:"white",marginLeft:"1.5%",backgroundColor:"#02bcd2",fontSize:"2vh",borderRadius:"5px",padding:"1vw"}}>
                              Upload </button>
                        
                       </Column>
  
                                      <h4 style={{color:"red"}}>{this.state.message1}</h4>
                        </Row>
                        
                        <Row large={12} small={12} medium={12} > 
                                <h4 style={{fontFamily:"Nunito",fontSize:"3vh"}}>All your images</h4>
                               
                                {this.state.otherImages.map( url =>  
                                <Column large={2} small={2} medium={2} >
                                     
                                     <img src={process.env.PUBLIC_URL + "/images/icons/delete.png"} width="40%" style={{float:"right"}} 
                                          id={"a" + url} onClick={this.deleteImage} ></img>

                                        <img src={process.env.PUBLIC_URL + "/images/icons/crown.png"} width="50%" style={{float:"right"}} id={url} 
                                          onClick={this.changeMainImage} ></img>
                                        
                                        <img src={url} width="100%" />
                                      
                                </Column>
                                )}
                            </Row>
  
                          
  
                         
                    </div>
                    </center>
                 
                </Column>
  
                 
  
          </Row>
          </div>
        )
     
      
    
        
  }
}




export default EditItem

