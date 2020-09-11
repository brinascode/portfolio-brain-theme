import React from 'react';
import Swipeable from 'react-swipeable';
import {Grid, Card, CardActions, CardContent, Typography} from "@material-ui/core"
import Login from "../authen/Login.jsx"
import Footer from "../main_ui_blocks/Footer.jsx"
import { api } from "../other_important/SharedVars.js"
import AppContext from "./AppContext.js"
import UserHeader from './UserHeader.jsx';

const RIGHT = '-1';
const LEFT = '+1';


//-------------------------------------------------------------------COMPONENT-----------------------------------
 class Welcome extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleWindowSizeChange =  this.handleWindowSizeChange.bind(this)
    this.loginWithGoogle = this.loginWithGoogle.bind(this)
    this.state = { 
      imageIdx: 0,
      windowWidth: window.innerWidth,
      loginWithGoogle:this.loginWithGoogle
              };
   
   
  }

  // make sure to remove the listener
// when the component is not mounted anymore
  componentWillMount(){
    window.addEventListener("resize",this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange(){
    this.setState({windowWidth:window.innerWidth})
  }


  onSwiped(direction) {
    const {images} = this.props;
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = this.state.imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= images.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = images.length - 1
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  loginWithGoogle(){
      window.location.href = api()+"/auth/google"  
  }

  render() {

        const { imageIdx = 0 } = this.state;
        const { messages } = this.props

        const width = this.state.windowWidth
        const isMobile = width <= 500
     
              return(
              <AppContext.Provider value={this.state}>
                    <Grid container>
                          <Grid item lg={12} xs={12} sm={12} md={12}>
                             <UserHeader/>
                             <br></br> <br></br>
                          </Grid>

                          <Grid item lg={12} xs={12} sm={12} md={12} className="welcome-slide" style={{height:"70vh"}}>
                              <Grid item lg={3} xs={12} sm={12} md={12}  >
                                          <Swipeable
                                                trackMouse
                                                preventDefaultTouchmoveEvent
                                                onSwipedLeft={() => this.onSwiped(LEFT)}
                                                onSwipedRight={() => this.onSwiped(RIGHT)}
                                                >
                                                <center >   

                                                  <div style={{margin:"3vw",marginBottom:"4vw",padding:"3%",width:"90%",backgroundColor:"rgba(255,255,255,1)",borderRadius:"6px"}}>
                                                      
                                                              <h4 style={{fontFamily:"moonbold"}}> 
                                                              <p>  
                                                              {messages[imageIdx]} 
                                                              </p> 
                                                              <img src="images/icons/sell.png" width="30%"></img>
                                                              </h4>
                                                              <button 
                                                              onClick={() => this.onSwiped(RIGHT)}
                                                              style={{}}> <h1>  ⇦  </h1>
                                                              </button>
                                                              <button
                                                              onClick={() => this.onSwiped(LEFT)}
                                                              style={{}}><h1> ⇨</h1>
                                                              </button>
                                                              
                                                              <Login/> 
                                                              
                                                    </div>
                                                  </center>
                                          </Swipeable>
                                    </Grid>
                            </Grid>

                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Find what your need
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>

                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            From Textbooks to Services
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>

                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Sell and Provide
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                          <Grid item lg={3} xs={12} sm={12} md={12} >
                                  <Card>
                                        <CardContent>
                                          <Typography >
                                            Too!
                                          </Typography>
                                         </CardContent> 
                                </Card>
                          </Grid>
                       
                       
                    </Grid>
                </AppContext.Provider>
              )
        
        }
        
  }

Welcome.defaultProps = {

    images : [".jpg",".jpg",".jpg"],
    messages :
     ["Welcome to MU needs, your platform to obtain services from other Marymount students or offer your own!", 
   "Do you have any marketable skill like photography, hair styling, makeup, or web design?",
   "Create a profile and start getting offers!","bye"]
   

}

Welcome.contextType = AppContext
export default Welcome

