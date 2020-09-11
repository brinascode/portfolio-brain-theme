import React from "react"
import {Column} from "react-foundation"

class SellWelcome extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Column  large={12} small={12} medium={12} 
            style={{height:"50vh",borderRadius:"5px",
                width:"100%",
                backgroundImage:"url('/images/catalog/work.jpeg')",
                backgroundSize:"100%", 
                backgroundPosition:"center",
                marginTop:"%"}} >

            </Column>
        )
    }
}

export default SellWelcome