//Our react imports
import React, { Component } from 'react';
import "./App.css"

import {Grid} from "@material-ui/core"

//Routing
import {Route, Switch} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

//Our main UI Blocks
import Welcome from "./main_ui_blocks/Welcome.jsx"
import UserView from "./main_ui_blocks/UserView.jsx"

//Ionic
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Notes about tags:
The 2nd column is not visible and not meant to be seen, it's just us defining all the routes and 
links of our application. What is seen from it tho is the exact path: the Welcome component.
Any other link will be shown in this SPACE.
*/


class App extends Component {
  render() {
      return (
        
          <IonApp >
            <IonReactRouter >
              <IonRouterOutlet style={{overflowY:"auto"}}>
                <Grid container >
                    <Grid item lg={12} md={12} sm={12} > 
                          <Route exact path="/" component={Welcome} />
                          <Route path="/userview" component={UserView} />
                    </Grid>
                </Grid>
              </IonRouterOutlet>
            </IonReactRouter>
          </IonApp>
      );
  }
}

export default App;
