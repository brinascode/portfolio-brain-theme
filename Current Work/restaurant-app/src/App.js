import React from 'react';
import {Switch,Route} from "react-router"
import {Grid} from "@material-ui/core"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
//Pages for Routing
import Home from "./pages/Home"


function App() {
  return (
    <Switch>
        <Grid container>
            <NavBar/>
            <Route exact path = "/" component={Home}/>
            <Route exact path = "/home" component={Home}/>
            <Footer/>
        </Grid>
    </Switch>
  );
}

export default App;
