import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core"
import AppContext from "../../main_ui_blocks/AppContext.js"
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';




//-------------------------------------------------------------------COMPONENT-----------------------------------
class Catalog extends React.Component {
  
    constructor(props,context){
        super(props,context)
        this.state = {
            mobile:{
                bannerColumn:{ margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%",boxShadow: " 0 1px 2px rgba(0,0,0,0.24)"},
                itemColumn:{},
                itemSpacing:1,
                tallFromBottomRow:{
                    margin:"0vw",
        
                },
                shortFromBottomRow:{
                    margin:"0vw",
                   
                },
                imgAllTall:{
                    boxShadow:"0px 0px 0px #888888",
                    borderRadius:"5px",
                    borderTopStyle:"none",
                    height:"30vw",
                    width:"50vw",
                    position:"center",
                   
                },
                images:["/images/catalog/mobile/textbooks.jpg","/images/catalog/mobile/artists.jpg","/images/catalog/mobile/photographer.jpeg","/images/catalog/mobile/models.jpg","/images/catalog/mobile/hair.jpg","/images/catalog/mobile/things.jpeg","/images/catalog/mobile/makeup.jpg"] 
            },
            desktop:{
                bannerColumn:{marginLeft:"4%",marginTop:"6%",marginBottom:"3%",borderRadius:"5px"},
                itemColumn:{itemSpacing:0},
                itemSpacing:3,
                tallFromBottomRow:{
                    marginTop:"-25vh"
                },
                shortFromBottomRow:{
                    marginTop:"2vh"
                },
                imgAllTall:{
                    boxShadow:"0px 0px 0px #888888",
                    borderRadius:"5px",
                    borderTopStyle:"none"
                },
                images:["/images/catalog/desktop/textbooks.jpeg","/images/catalog/desktop/artists.jpg","/images/catalog/desktop/photographer.jpeg","/images/catalog/desktop/models.jpeg","/images/catalog/desktop/hair.jpeg","/images/catalog/desktop/things.jpeg","/images/catalog/desktop/makeup.jpeg"]
            }
        }

        
        
    }

    componentWillMount(){
        this.context.setInitialStyles(this.state.mobile,this.state.desktop,"Catalog")
     
    }

    componentWillUpdate(){
        //Anytime the component updates, we check whether it had anything to do with window resize
        this.context.responsiveDesign(this.state.mobile,this.state.desktop,"Catalog")
    }
    
  render() {

        var descriptionStyle = {
            boxShadow:"0px 0px 1px #888888",
            backgroundColor:"white"
        }


        return (

          <div >


<Grid container  style={{marginBottom:"2vw",textAlign:"center"}} >
               
                        <Grid item lg={12} sm={12} md={12}  style={{borderRadius:"1vw",textAlign:"center"}}>
                                
                                            <h2 style={{fontFamily:"Archivo Black",color:"#171b1e",textAlign:"center"}}> <b> Find what you need! </b> </h2> 
                                              
                        </Grid>
                   
</Grid>


    <Grid container spacing={this.context.styles["Catalog"].itemSpacing}>
        
                                     
                                                <Grid item lg={3} xs={6} sm={6} md={3} style={this.context.styles["Catalog"].itemColumn}>
                                                    <Link to='/userview/catalog:textbooks' >
                                                                <img  style={this.context.styles["Catalog"].imgAllTall} src={process.env.PUBLIC_URL + this.context.styles["Catalog"].images[0] } className="grow-on-hover" />
                                                                    <div style={descriptionStyle} className="catalog-item "  > 
                                                                    <center> <h4 style={{fontFamily:"Nunito",color:"#171b1e"}} > Textbooks</h4></center>
                                                                    </div>
                                                                    </Link>
                                                </Grid> 

                                              
                                                 
                                    <Grid item lg={3} xs={6} sm={6} md={3}  style={this.context.styles["Catalog"].itemColumn}>
                                                          <Link to='/userview/catalog:artists' >
                                                    <img  style={this.context.styles["Catalog"].imgAllTall} src={process.env.PUBLIC_URL +  this.context.styles["Catalog"].images[1]} />
                                                        <div className="catalog-item "  style={descriptionStyle} > 
                                                        <center> <h4 style={{fontFamily:"Nunito"}}> Artists and other creatives </h4></center>
                                                        </div>
                                                        </Link>
                                                </Grid>

                                    <Grid item lg={3} xs={6} sm={6} md={3}style={this.context.styles["Catalog"].itemColumn} >
                                            <Link to='/userview/catalog:photographers' >
                                                <img style={this.context.styles["Catalog"].imgAllTall}  src={process.env.PUBLIC_URL + this.context.styles["Catalog"].images[2] } className="grow-on-hover" />
                                                <div className="catalog-item "  style={descriptionStyle} > 
                                                <center> <h4 style={{fontFamily:"Nunito"}}>Photographers</h4></center>
                                                </div>
                                                </Link>
                                    </Grid>

                                     <Grid item lg={3} xs={6} sm={6} md={3}  style={this.context.styles["Catalog"].itemColumn}>
                                        <Link to='/userview/catalog:models' >
                                                    <img style={this.context.styles["Catalog"].imgAllTall} src={process.env.PUBLIC_URL + this.context.styles["Catalog"].images[3] } class="grow-on-hover" />
                                                    <div className="catalog-item " style={descriptionStyle} > 
                                                    <center> <h4 style={{fontFamily:"Nunito"}}>Models</h4></center>
                                                    </div>
                                                    </Link>
                                                </Grid>

                                    <Grid item lg={3} xs={6} sm={6} md={3}  style={this.context.styles["Catalog"].tallFromBottomRow}  >
                                                <Link to='/userview/catalog:hair' >
                                                    <img  style={this.context.styles["Catalog"].imgAllTall} src={process.env.PUBLIC_URL + this.context.styles["Catalog"].images[4]}  />
                                                        <div className="catalog-item "  style={descriptionStyle} > 
                                                                <center><h4 style={{fontFamily:"Nunito"}}>Hair Stylists and Braiders</h4></center>
                                                        </div>
                                                        </Link>
                                    </Grid>

                                    <Grid item lg={3} xs={6} sm={6} md={3} style={this.context.styles["Catalog"].shortFromBottomRow} >
                                                <Link to='/userview/catalog:sales'>
                                                    <img style={this.context.styles["Catalog"].imgAllTall} src={process.env.PUBLIC_URL + this.context.styles["Catalog"].images[5] } class="grow-on-hover" />
                                                    <div className="catalog-item "  style={descriptionStyle} > 
                                                    <center> <h4 style={{fontFamily:"Nunito"}}> Things on sale</h4></center>
                                                    </div>
                                                    </Link>
                                    </Grid>
                                    


                                    <Grid item lg={3} xs={6} sm={6} md={3}   style={this.context.styles["Catalog"].tallFromBottomRow}>
                                         <Link to='/userview/catalog:makeup' >        
                                        <img style={this.context.styles["Catalog"].imgAllTall} src={process.env.PUBLIC_URL + this.context.styles["Catalog"].images[6] } className="grow-on-hover"  />
                                        <div className="catalog-item "  style={descriptionStyle} > 
                                            <center> <h4 style={{fontFamily:"Nunito"}}>Makeup artists</h4></center>
                                        </div>
                                        </Link>
                                    </Grid>

 
  </Grid>
 
         
          </div>
        )
  }
}
Catalog.contextType = AppContext
export default Catalog