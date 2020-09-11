import React from "react"
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from "./CheckoutForm"

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
    return {
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          fontFamily: 'Open Sans, sans-serif',
          letterSpacing: '0.025em',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#c23d4b',
        },
      }
    }
  };
  
class buyPage extends React.Component{
    constructor(props){
        super(props)  
    }

   
    render(){
        return (
            <div> 
                <StripeProvider apiKey="pk_test_1B8DPVWYFPF17F2YbMOdmi0H00z40b9ZjO">
                    <div className="example">
                        
                        <Elements>
                            <CheckoutForm productData={this.props.productData}/>
                        </Elements>
                    </div>
                </StripeProvider>
          
          </div>
        )
    }
}

export default buyPage