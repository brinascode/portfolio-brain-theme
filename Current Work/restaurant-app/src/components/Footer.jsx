import React from "react"
import {AppBar, Toolbar, Button, Container, Grid, GridList, GridListTile, TextField, MenuItem} from "@material-ui/core"

var footerStyle={
    // border:"solid pink",
   
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"flex-start",
    backgroundColor:"black",
    color:"white",
    padding:"4%",
    height:"100vh"
}

export default function Footer(){
  
        return(
            <Grid item xs={12} sm={12} md={12} lg={12} style={footerStyle}>
                <strong>Copyright Sabrina Koumoin 2020</strong>
            </Grid>
        )
}
