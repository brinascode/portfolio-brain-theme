import React from "react"
import {AppBar, Toolbar, Button, Container, Grid, GridList, Card, CardContent} from "@material-ui/core"
import styles from "./home.module.css"

   var cardContentStyle = {
       textAlign:"center",
       paddingTop:"2%"
    }

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

   

    render(){
        return(

            <Grid container item spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}   className={styles.banner}>
                         <Container>
                             <h1>Welcome to Yummy</h1>
                             Your favorite social foodie app
                        </Container>
                    </Grid>

                    <Grid item container style={{padding:"4%"}}>
                        <Grid item xs={0} sm={12} md={12} lg={12}>
                            <br></br>
                            <br></br>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                         <i class="fas fa-utensils fa-5x"></i>
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                        <i class="fas fa-hamburger fa-5x"></i>
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                        <i class="fas fa-pepper-hot fa-5x"></i>
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                                <Card>
                                    <CardContent style={cardContentStyle}>
                                        <i class="fas fa-ice-cream fa-5x"></i>
                                    </CardContent>
                                </Card>
                        </Grid>

                    </Grid>
                
            </Grid>
        )
    }
}