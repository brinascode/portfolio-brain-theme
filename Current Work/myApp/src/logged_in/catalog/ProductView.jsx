import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { api } from "../../other_important/SharedVars.js"
import {Grid} from "@material-ui/core"
import BuyPage from "../buy/buyPage.jsx"




//-------------------------------------------------------------------COMPONENT-----------------------------------
class ItemView extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      product:{name:"",otherImages:[""]}, //and other empty placeholders for if state gets realllyy slow
      paymentSectionVisibility:"hidden"
    }
    this.findProduct = this.findProduct.bind(this)
    this.showPaymentSection = this.showPaymentSection.bind(this)
    this.findProduct() //what if this fails? Should return proper error
   
  }

  findProduct(){
    const index = this.props.location.pathname.indexOf(":")
    const productIdFixed = this.props.location.pathname.substring(index+1)
    const component = this
    axios.post(api()+"/findProduct",{productId:productIdFixed})
    .then(function(response){
          component.setState({
            product:response.data[0]
          })
          console.log(response)
         // alert(JSON.stringify(component.state))    
        })
    .catch(function(error){console.log(error)})
  }

  showPaymentSection(){
    this.setState({paymentSectionVisibility:"visible"})
  }

  render() {
    const product = this.state.product
    //For resp design
    var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
    var bannerColumnPc = {}
    var bannerColumnMobile2 = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%",padding:"0px"}
    var bannerColumnPc2 = {}

    var itemColumnMobile = {padding:"10px",width:"100%",borderRadius:"5px"}
    var itemColumnPc = {marginTop:"4vw"}
    var innerPaddingPc = {marginLeft:"5%"}
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
           <div >
            <Grid container style={{marginBottom:"2vw",textAlign:"center"}} >     
                <Grid item lg={12} md={12} sm={12} xs={12}  style={{borderRadius:"1vw",textAlign:"center"}}>            
                   <h2 style={{fontFamily:"Archivo Black",color:"#171b1e",textAlign:"center"}}> <b>  {product.name}    </b> </h2> 
                      <h4 style={{fontFamily:"Nunito"}}> 
                        Sold by:  {product.sellerUsername}   
                      </h4>         
                </Grid>
                      
            </Grid>
            <Grid container style={{borderRadius:"1vw",margin:"0"}} >
                  <Grid item lg={6} md={12} sm={12} xs={12}  style={itemColumn.style}>
                                      <div style={innerPadding.style}>
                                          <img src={product.mainImage} style={{borderRadius:"5px"}} width="80%" />
                                      </div>
                                      <br></br>                        
                  </Grid>    
                  <Grid item lg={6} md={12} sm={12} xs={12}  style={{padding:"2vw"}} >
                                        <div style={innerPadding2.style}>
                                          <h4>${product.price}</h4>
                                            <h4 style={{fontFamily:"moonbold"}}> 
                                                  Item Description:<br></br>
                                            </h4>
                                            <h4 style={{fontFamily:"moon"}}>{product.description}</h4>
                                            
                                          </div>
                                      <button onClick={this.showPaymentSection} style={{backgroundColor:"#02bcd2",borderRadius:"5px",padding:"1vw"}}>
                                          <h2 style={{color:"white"}}>
                                            Buy!
                                          </h2> 
                                      </button>

                                      <div style={{visibility:this.state.paymentSectionVisibility}}>
                                          <br></br>
                                          <BuyPage productData={{
                                            productName:this.state.product.name,
                                            price:this.state.product.price,
                                            productId:this.state.product._id,
                                            sellerStripeId:this.state.product.seller_stripe_id,
                                            sellerUsername:this.state.product.sellerUsername,
                                            sellerId:this.state.product.sellerId
                                            }}/>
                                      </div>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}   style={bannerColumn2.style}  >
                          <h2 style={{color:"#171b1e",borderRadius:"5px"}} className="gradient-back2">
                          <span style={{marginLeft:"3%"}}>Pictures</span></h2>
                          <Grid container>
                                  {this.state.product.otherImages.map( url =>  
                                   <Grid item lg={4} md={4} sm={6} xs={6}   >
                                  <img src={url}  width="50%" />
                                  </Grid>)}
                          </Grid>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}    style={bannerColumn2.style}  >   
                    <h2 style={{color:"#171b1e",borderRadius:"5px"}} className="gradient-back2">
                      <span style={{marginLeft:"3%"}}>Seller Reviews</span>
                    </h2>
              </Grid>

    </Grid>
           
            </div>
          )
       
        
  }
}




export default ItemView
/*
<div>
                                        <Column large={3} small={12} medium={4}  >
                                        <Link to='/userview/item:id' style={{color:"black"}}>
                                                <img src={process.env.PUBLIC_URL + "/images/welcome_slide/beach.jpeg"} style={imgStyle}/>
                                                <div className="catalog-item gradientBack" style={descriptionStyle}>
                                                  <h4> {good.name} </h4>
                                                  <h4>  {good.mainCategory} </h4>
                                                  <h4> ${good.price}</h4>
                                                  <h4> Available: ${good.quantity}</h4>
                                              </div>
                                           </Link>
                                            
                                            </Column>


                                      </div>

*/