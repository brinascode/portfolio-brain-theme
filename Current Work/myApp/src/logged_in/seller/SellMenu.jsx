import React from 'react';

//Routing
import { Link } from 'react-router-dom';
import axios from "axios"

import { Row, Column, Button} from "react-foundation"


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



//-------------------------------------------------------------------COMPONENT-----------------------------------
class SellMenu extends React.Component {
  
  constructor(props){
    super(props);
    


   
  }



  render() {
    
    //For resp design
        var bannerColumnMobile = { margin:"10px",marginTop:"50px",borderRadius:"5px",width:"100%"}
        var bannerColumnPc = {marginLeft:"4%",marginTop:"6%",marginBottom:"3%",borderRadius:"5px"}
        
        var itemColumnMobile = {padding:"0px",margin:"0px",width:"120%"}
        var itemColumnPc = {}

     


        var bannerColumn = {}
        var itemColumn = {}

        if(this.props.mobile){
            bannerColumn.style = bannerColumnMobile
            itemColumn.style = itemColumnMobile
        }else{
            bannerColumn.style = bannerColumnPc
            itemColumn.style = itemColumnPc
        }


        return (
          <div className="">

          


<center>
<Row large={12} medium={12} small={12} style={{marginBottom:"3vw"}} >
               
                        <Column  large={12} small={12} medium={12}  className="gradient" style={{borderRadius:"1vw"}}>
                                
                                            <h2 style={{fontFamily:"Archivo Black",color:"#171b1e"}}> <b> Sell / Offer a service </b> </h2> 
                                                    <h4 style={{fontFamily:"Nunito"}}> 
                                                            And start earning!
                        
                                                    </h4>
                                
                        </Column>
                   
</Row>
</center>

        <center>
          <Row large={12} medium={12} small={12} style={{borderRadius:"1vw"}} >

          <Column large={12} small={12} medium={12}>

                          <Column  large={3} small={6} medium={6} >
                              <Link to="/userview/sellProductsTab" > 
                                      <div  style={{borderRadius:"5px"}}  className="gradient-smoothpinky" >
                                          <h4  style={{color:"black",fontFamily:"Nunito",padding:"20px"}}> Sell a  Product<br></br> </h4>
                                          <br></br>

                                          
                                      </div>
                                </Link>
                          </Column>
                      
                      
                          <Column  large={3} small={6} medium={6}  >
                            <Link to="/userview/viewMyProductsTab">
                                <div  style={{borderRadius:"5px"}} className="gradient-smoothpinky">
                                      <h4  style={{color:"black",fontFamily:"Nunito",padding:"20px"}}> View my products on sale </h4>
                                </div>
                            </Link>
                        </Column>
                      

                      
                      <Column  large={3} small={6} medium={6}  >
                            <Link to="/userview/offerServicesTab">
                                <div  style={{borderRadius:"5px"}}   className="gradient-smoothpinky">
                                    <h4 style={{color:"black",fontFamily:"Nunito",padding:"20px"}}> Provide a Service </h4> <br></br>
                                </div>
                            </Link>
                      </Column>
                      

                        <Column  large={3} small={6} medium={6}  >
                            <Link to="/userview/viewMyServicesTab">
                            <div  style={{borderRadius:"5px"}} className="gradient-smoothpinky">
                               <h4  style={{color:"black",fontFamily:"Nunito",padding:"20px"}}> View my services   </h4>
                               <br></br>
                               </div>
                            </Link>
                        </Column>

                </Column>
               
                
                    
                   
     
           </Row>
  </center>
         
          </div>
        )
  }
}




export default SellMenu




//#f2f9fc

