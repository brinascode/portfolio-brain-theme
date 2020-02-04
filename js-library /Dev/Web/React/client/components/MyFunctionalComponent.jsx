import React, {useState,useEffect,useContext} from "react"
import ThemeContext from "./ThemeContext.jsx"


function MyFunctionalComponent(){

    const [count,setCount] = useState(0)
    const [guests, setGuestCount] = useState(1)

    let theme = useContext(ThemeContext)
 

    useEffect(()=>{
        document.title = `You clicked ${count} times!`
    })

    return(
        <div>
            <h1 style={{color:theme.color3}}> This should be red, coming from a functional component
                    <button onClick={theme.toggleRedPurple}>Click here to change me to purple from the functional component</button>
             </h1>
            
            <h1> Count {count} </h1>
            <button onClick={() => {setCount(count+1)}}>Add </button>
            <button onClick={() => {setCount(count-1)}}>Subtract </button>

            <h1>Guests {guests}</h1>
            <button onClick={() => {setGuestCount(guests+1)}}>Add </button>
            <button onClick={() => {setGuestCount(guests-1)}}>Subtract </button>
        </div>
    )
}

export default MyFunctionalComponent