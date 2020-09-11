import React from 'react';
import AppContext from "./AppContext.js"
import {Grid} from "@material-ui/core"

//Routing
import {Route, Switch} from "react-router-dom";
import axios from "axios"
import { api } from "../other_important/SharedVars.js"

//Stripe
import Stripe from "../logged_in/user/Stripe.jsx"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


//Needed Blocks
import UserHeader from "./UserHeader.jsx"
import NewSideBar from "./NewSideBar.jsx"
import Footer from "./Footer.jsx"

//Needed views
import UserHome from "../logged_in/user/UserHome.jsx"
import Catalog from "../logged_in/catalog/Catalog.jsx"
import CatalogTypeView from "../logged_in/catalog/CatalogTypeView.jsx"
import ProductView from "../logged_in/catalog/ProductView.jsx"
import ServiceView from "../logged_in/catalog/ServiceView.jsx"
import DeleteProduct from "../logged_in/seller/DeleteProduct.jsx"
import DeleteService from "../logged_in/seller/DeleteService.jsx"
import Settings from "../logged_in/user/Settings.jsx"
import Logout from "../authen/Logout.jsx"
import ComingSoon from "../other_important/ComingSoon.jsx"



//Nested Views/Components:
import SellMenu from "../logged_in/seller/SellMenu.jsx"
import SellWelcome from "../logged_in/seller/SellWelcome.jsx"
import SellProducts from "../logged_in/seller/SellProducts.jsx"
import OfferServices from "../logged_in/seller/OfferServices.jsx"
import ViewMyProducts from "../logged_in/seller/ViewMyProducts.jsx"
import ViewMyServices from "../logged_in/seller/ViewMyServices.jsx"
import EditItem from "../logged_in/seller/EditItem.jsx"
import BuyPage from "../logged_in/buy/buyPage.jsx"


class UserView  extends React.Component { 

 constructor(props,context) {
        super(props,context);
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
        this.setStyle = this.setStyle.bind(this)
        this.setInitialStyles = this.setInitialStyles.bind(this)
        this.responsiveDesign = this.responsiveDesign.bind(this)  
        this.logout = this.logout.bind(this)
        this.state = {
          handleWindowSizeChange:this.handleWindowSizeChange,
          setInitialStyles : this.setInitialStyles,
          responsiveDesign:this.responsiveDesign,
          setStyle: this.setStyle,
          logout:this.logout,
          oldView:false,
          mobileView:false,
          contextActive:true,
          styles:{NewSideBar:{},Catalog:{},shared:{
            blueButton:{backgroundColor:"#02bcd2",borderRadius:"5px",padding:"1vw"}
          }}
        }
  }

  logout(){
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("profilePicture")
    sessionStorage.removeItem("phoneNumber")
    window.location.href=api()+"/logout"
  }

  handleWindowSizeChange(){
          if(window.innerWidth > 500){
            this.setState({mobileView:false})
            this.setState({sidebarGradient:""}) //Do not delete these, they determine how the sidebar looks on mobile or desktop
          }else{
            this.setState({mobileView:true})
            this.setState({sidebarGradient:""})
          }     
  }

  setInitialStyles(mobileStyle,desktopStyle,component){
      //Had to create this because initial Desktop style was not being set because oldView is by default false and the responsiveDesign function only detected a change....
      var oldView = this.state.oldView
      var mobileView = this.state.mobileView
      if(!oldView && !mobileView){ //If you are on a desktop
        this.setStyle(desktopStyle,component)
      }else{ //Shouldn't need to set this, but for some reason I have to? --> because if not then the basic style for mobile is still empty and the render will not find the style
        this.setStyle(mobileStyle,component)
      }
  }

  responsiveDesign(mobileStyle, desktopStyle, component){  // This function is called when dynamically styled components are updated. Called in their componentDidUpdate function
      //Not to set initial style, but to detect if we are moving from one display type to another
      var oldView = this.state.oldView
      var mobileView = this.state.mobileView
        if(oldView != mobileView){ 
          if(oldView && !mobileView){
            //if we're going from mobile to destkop
            this.setState({oldView:false})
            this.setStyle(desktopStyle,component)
            return true
          }else if(mobileView && !oldView){
          // if we're going from desktop to mobile")
            this.setState({oldView:true})
            this.setStyle(mobileStyle,component)
            return true
          }
        }
    } 

  setStyle(style,component){
      var styles = this.state.styles
      styles[component] = style
      this.setState({styles:styles})
  }


  componentWillMount(){

       //Handling window resize => All responsive design functions stem from here
       window.addEventListener("resize",this.handleWindowSizeChange)
       this.handleWindowSizeChange()
      
       //Session storage and user info
       const params = new URLSearchParams(document.location.search.substring(1))  //why not use props.location for this? ==> cause URSearchParams has methods that give us the params we need faster
       var _id = params.get("id")
       var component = this

        /*These are used because the component can be rerendered. We don't want to use a POST every time this happens, so 
        we use sessionStorage.
        We store the data ONCE in sessionStorage, but any time the userView component is rendered, we pull this data from 
        the sessionStorage into the state, so that the children components can receive it as well (initially as props but now using context).
        */
      
        //If the data is already in sessionStorage, we only update the state
       if(sessionStorage.getItem("userId")){  
        component.setState({
          userId:sessionStorage.getItem("userId"),
          name:sessionStorage.getItem("name"),
          username:sessionStorage.getItem("username"),
          phoneNumber:sessionStorage.getItem("phoneNumber"),
          profilePicture:sessionStorage.getItem("profilePicture")
          })
       }//If there is an id in the URL, means this is the first time the view is being accessed after login ... erase the rest check?
       else if(_id && (sessionStorage.getItem("userId") !== undefined || sessionStorage.getItem("userId") !== null)){ 
          axios.post(api()+"/getUserInfo",{_id:_id}).then(function(response){
            if(response.data.message !== undefined ){//if there's a message it means theres no user found for this id ... ==> error
                alert("You need to be logged in. Redirecting you to login page")
                window.location.href = "/"
            }else
               {
                  sessionStorage.setItem("userId", _id);
                  sessionStorage.setItem("name", response.data.name);
                  sessionStorage.setItem("username", response.data.username);
                  sessionStorage.setItem("phoneNumber", response.data.phoneNumber);
                  sessionStorage.setItem("profilePicture", response.data.profilePicture);

                component.setState({
                  userId:sessionStorage.getItem("userId"),
                  name:response.data.name,
                  username:response.data.username,
                  phoneNumber:response.data.phoneNumber,
                  profilePicture:response.data.profilePicture
                  })
                window.location.reload() //Why are we reloading?? Is there not a way to do this without reloading?
            }
          }).catch(function(error){ 
            console.log(error)
          })
       }//If there's no id in the params and also nothing in storage ==> no user is logged in and must log in
       else if(!_id && (sessionStorage.getItem("userId") === undefined || sessionStorage.getItem("userId") === null)) 
          {
          alert("You need to be logged in. Redirecting you to login page")
          window.location.href = "/"
       } 
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  render(){
            return (
                <AppContext.Provider value={this.state}> 
                   <Elements stripe={stripePromise}>
                    <Grid container>
                        <Grid item lg={12} sm={12} md={12}>
                            <UserHeader/>
                            <br></br> <br></br><br></br>
                        </Grid>
                     
                        <Grid  item lg={2} sm={12} md={12} className={this.state.sidebarGradient}>
                           <NewSideBar  name={this.state.name} username={this.state.username} profilePicture={this.state.profilePicture} style={{position:"fixed"}} /> 
                        </Grid>
                       
                        <Grid item lg={10} sm={12} md={12}>
                          <Grid container lg={12} sm={12} md={12} >
                              <Grid item lg={12} sm={12} md={12}>
                                      <Switch>
                                          <Route exact path="/userview" render={(props)=> <Catalog/>}/>
                                          <Route path={`${this.props.match.path}/stripecallback`} component={Stripe} />
                                          <Route  path={`${this.props.match.path}/home`} render={(props) =>  
                                            <UserHome/>} />
                                          <Route  path={`${this.props.match.path}/catalog`} component={Catalog}  />
                                          <Route  path={`${this.props.match.path}/catalog:type`} component={CatalogTypeView}/>
                                          <Route  path={`${this.props.match.path}/product:id`} component={ProductView} />
                                          <Route  path={`${this.props.match.path}/service:id`} 
                                                  render={(props) => 
                                                  <ServiceView  location={this.props.location} /> }/> 
                                                  {/*  Sell Menu +  different views based on :id in Route  */}
                                          <Route  path={`${this.props.match.path}/sell`} render={(props)=><div><SellMenu/><SellWelcome/></div>}/>
                                          <Route  path="/userview/sellProductsTab" render={(props)=> <div> <SellMenu/> <SellProducts /> </div>} />
                                          <Route  path="/userview/viewMyProductsTab" render={(props)=> <div> <SellMenu/> <ViewMyProducts /> </div>} />
                                          <Route  path="/userview/offerServicesTab" render={(props)=> <div> <SellMenu/> <OfferServices /> </div>} />
                                          <Route  path="/userview/viewMyServicesTab" render={(props)=> <div> <SellMenu/> <ViewMyServices /> </div>} />
                                        
                                          <Route  path={`${this.props.match.path}/editProduct:id`} render={(props) => <div> <SellMenu/> <EditItem location={this.props.location} type="product"  mobile="false" /> </div>}  />
                                          <Route  path={`${this.props.match.path}/editService:id`} render={(props) => <div> <SellMenu/> <EditItem location={this.props.location} type="service"  mobile="false" /> </div> }/>
                                          <Route  path={`${this.props.match.path}/deleteProduct:id`} component={DeleteProduct} />
                                          <Route  path={`${this.props.match.path}/deleteService:id`} component={DeleteService} />
                                          <Route  path={`${this.props.match.path}/buyPage:id`} component={BuyPage} />  
                                          <Route  path={`${this.props.match.path}/settings`} render={(props) => <Settings />} />
                                          <Route  path={`${this.props.match.path}/logout`} component={Logout} />
                                          <Route path={this.props.match.path+"/events"} component={ComingSoon} />
                                          <Route path={this.props.match.path+"/coupons"} component={ComingSoon}/>
                                          <Route path={this.props.match.path+"/about"} component={ComingSoon}/>
                                      </Switch>
                                  </Grid>
                            </Grid>
                          </Grid>

                         <Grid item lg={12} md={12} sm={12}>
                                <Footer />
                        </Grid>
                        
                  </Grid>
              </Elements>
           </AppContext.Provider>
    
            )
    }
}
UserView.contextType = AppContext
export default UserView

   