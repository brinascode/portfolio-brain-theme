import React from 'react';
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"
import { Row, Column, Button} from "react-foundation"
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


//-------------------------------------------------------------------COMPONENT-----------------------------------
class SellProducts extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {

      name:"",
      mainCategory:"textbooks", // Higher level is either textbooks or other stuff. 
      subCategories:[], //using different sections to identify item. Ex: ['dorm','girls',"boys",] etc. This  will be used for filters, hashtags etc
      //subCategory:"", //a helper variable to work with checkboxes                
      description:"",
      price:5,
      quantity:1, //listed in the UI as number
      mainImage:"", //the url
      otherImages:[""],
      sellerId:sessionStorage.getItem("userId"),
      sellerUsername:sessionStorage.getItem("username"),
      datePosted:new Date(),
      seller_stripe_id:""

    }

    this.stripeStatus = ""
    this.getStripeInfo = this.getStripeInfo.bind(this)
    

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArray = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleImages = this.handleImages.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.formStyle = {width:"50%"}

    


  }

 

  handleChange(event){
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    
    this.setState({[name]:value})
  }

  handleChangeArray(event){
    alert(this.state)
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    
    this.setState(prevState => ({
      subCategories: [...prevState.subCategories, name,value] 
      //make sure that in database, we start saving from subCategories[1] instead of 0
    }))
   
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
        
        //We request a signature from the server
        function getSignedRequest(file){
            const xhr = new XMLHttpRequest();
            
            xhr.open('GET', api()+`/sign-s3?file-name=${file.name}&file-type=${file.type}`);
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                          const response = JSON.parse(xhr.responseText);
                          component.setState({imageFile:file,imageResponse:response})
                          component.setState({mainImage:response.url}) //Giving it the url so it can pass the verification (presence) test, later on
                          component.setState({otherImages:[""+response.url+""]})
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

 
  
  //Gets called after Submit Button is clicked
  uploadFile(file, signedRequest, url){
      const component = this
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
             component.setState({mainImage:url})
          }
          else{
            alert('Could not upload file.');
          }
        }
      };
      xhr.send(file);
    }



    submitForm(){
      /* make sure every aspect is checked
      Post function
      Pass to decide whether or not form is complete.
      Next: make sure it's also the proper type */
  

      var pass = true
      for(var key in this.state){
        if(this.state[key] === "" || this.state[key] === 0){
          alert("Please complete the form");
          pass = false
          break;
        }
      }
  
      if(pass){
          this.uploadFile(this.state.imageFile, this.state.imageResponse.signedRequest, this.state.imageResponse.url); 
          //We give the form these urls only when they're successfully uploaded... do something about uploads that timeout or dont work....
          this.setState({mainImage:this.state.imageResponse.url}) 
          this.setState({otherImages:[""+this.state.imageResponse.url+""]})
       
          axios.post(api()+"/newUpForSale",this.state)
          .then(function(response){
            
            // console.log(response.data) //Do something with this later. Return showing them their new addition
            //component.props.clickView("e","viewMyProductsTab")
            window.location.href= "/userview/viewMyProductsTab"
            
          })
          .catch(function(error){console.log(error)})
      }
    }
  
 getStripeInfo(){
  const component = this
  const _id = sessionStorage.getItem("userId")

  axios.post(api()+"/getStripeInfo",{_id:_id}).then(function(response){

    if(response.data.stripe_user_id.length > 0){
      
      component.setState({seller_stripe_id:response.data.stripe_user_id})
     
    }else{
      component.stripeStatus = false
      alert("Please set up your payment information before putting up a product for sale")
      window.location.href = "/userview/settings"
    }

  }).catch(function(error){
      console.log(error)
    })
  }

  componentWillMount(){
    this.getStripeInfo()
  }

 


  render() {

    

  
      return (
        <Row large={12} small={12} medium={12}>
     
              <Column  large={12} small={12} medium={12} style={{marginTop:"3vw",borderRadius:"5px"}} >
                    
                   <center> <h1 style={{fontFamily:"Nunito"}}> Sell Textbooks or Other Products </h1> </center>
                  
               </Column>
       
              <Column  large={6} small={12} medium={12} >
              
              <div style={{marginLeft:"0%"}}>
               <form>
                 <label style={{fontFamily:"Nunito",fontSize:"3vh"}}> Product Name or Name of textbook <br></br>
                    <input style={{width:"100%"}}
                    name="name"
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleChange} /> 


                 </label>

                 <label style={{fontFamily:"Nunito",fontSize:"3vh"}}> Main Category <br></br> 
                   <select style={{width:"100%"}}
                   name="mainCategory"
                   type="select"
                   value={this.state.mainCategory}
                   onChange={this.handleChange}>
                        <option>textbooks</option>
                        <option>other</option>
                   </select>
  
                 </label>

              

                 <label style={{fontFamily:"Nunito",fontSize:"3vh"}}> Description<br></br>
                 
                        <textarea style={{width:"100%"}}
                        name="description"
                        type="textarea"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="If your item is a textbook, include the name of the author and other important references."
                        />
                        
                </label>


                <label style={{fontFamily:"Nunito",fontSize:"3vh"}}> Price ($) <br></br>
                   <input style={{width:"100%"}}
                   name="price"
                   type="number"
                   value={this.state.price}
                   onChange={this.handleChange}
                   />
                
                </label>




                 <label style={{fontFamily:"Nunito",fontSize:"3vh"}}>  Quantity Available  <br></br>
                   <input style={{width:"100%"}}
                   name="quantity"
                   type="number"
                   value={this.state.quantity}
                   onChange={this.handleChange}
                   />
                
                </label>

                 
              </form>
              </div>
             
               
              </Column>

    
                             
              <Column  large={6} small={12} medium={12}  >
                      <div style={{marginRight:"0%"}}>
                          <form>
                          <label style={{fontFamily:"Nunito",fontSize:"3vh"}}>Upload your product's main image</label>
                          <p>After this, you will be able to edit your product and add more images.</p>
                        
                            <input type="file" id="file-input" onChange={this.handleImages}/>
                              
                              <img id="preview" src="/images/default.png" width="25%"/>
                          </form>

                        <center> 
                                <br></br>
                          <button onClick={this.submitForm} style={{backgroundColor:"#02bcd2",
                          fontSize:"4vh",borderRadius:"5px",padding:"1vw"}}>Finish</button>

                      </center>
                    </div>
              </Column>

            </Row>
     
 
    )
    

      
    
        
  }
}




export default SellProducts


