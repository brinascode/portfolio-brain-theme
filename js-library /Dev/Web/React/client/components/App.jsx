import React from "react"
import MyFunctionalComponent from "./MyFunctionalComponent.jsx"
import ThemeContext from "./ThemeContext.jsx"


class App extends React.Component{
    
    constructor(props){
        super(props)
        this.toggleRedPurple = this.toggleRedPurple.bind(this)
        this.state =  {
            context:{
                color1:"pink",
                color2:"orange",
                color3:"red",
                toggleRedPurple:this.toggleRedPurple
            }
        }
        
    }

    toggleRedPurple(){
        var oldContext = this.state.context
        oldContext.color3 = "purple"
        this.setState(oldContext)
    }


    render(){
        return(
            <ThemeContext.Provider value={this.state.context}>
                <div>

                    <h1 style={{color:this.context.color1}}>  This should be pink   </h1>
                    <h1 style={{color:this.context.color2}}>   This should be orange </h1>
                    <button onClick={this.toggleRedPurple}> Click to toggle Red Purple in the Class Component </button>
                    <MyFunctionalComponent />
                </div>
            </ThemeContext.Provider>
        )
    }
}

App.contextType = ThemeContext;
export default App;