import React from "react"
import {Row, Column} from "react-foundation"

class ComingSoon extends React.Component{
     constructor(){
          super()
     }

     render(){
          return(
          <div>

<Row large={12} medium={12} small={12} style={{marginBottom:"2vw",textAlign:"center"}} >
               
               <Column  large={12} small={12} medium={12}  style={{borderRadius:"1vw",textAlign:"center"}}>
                       
                                   <h2 style={{fontFamily:"Archivo Black",color:"#171b1e",textAlign:"center"}}> <b>   Coming Soon  </b> </h2> 
                                           <h4 style={{fontFamily:"Nunito"}}> 
                                                   The app is still in Beta version!
               
                                           </h4>
                       
               </Column>
          
</Row>

<Row large={12} medium={12} small={12}>
                      
                            <Column  large={12} small={12} medium={12} 
                          style={{height:"50vh",borderRadius:"5px",
                                backgroundImage:"url('/images/welcome_slide/happiness.jpeg')",
                                backgroundSize:"100%", 
                                backgroundPosition:"center",
                                marginTop:"%"}} >

                        </Column>
                  
     </Row>

                        
                </div>)
     }
}

export default ComingSoon