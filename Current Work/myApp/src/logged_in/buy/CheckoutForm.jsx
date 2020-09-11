import React from "react"
import {CardElement, injectStripe} from 'react-stripe-elements';
import {api} from "../../other_important/SharedVars.js"
import axios from "axios"
import {Paper} from "@material-ui/core"
import AppContext from "../../main_ui_blocks/AppContext.js"


// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '5vw',
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


class CheckoutForm extends React.Component {
    constructor(props,context) {
      super(props,context);
      this.submit = this.submit.bind(this);
      this.state = {complete: false};  
    }

    async submit(e){
      e.preventDefault()
      let {token} = await this.props.stripe.createToken({name: "Name"}); //Is this name supposed to change? Yes...And then we add our address lines too etc
      var component = this
      var data = this.props.productData
      var price = data.price*100 //To be in the right format. For example, $20 in Stripe is written as 2000

        axios.post(api()+`/charge`,
        {token:token,
         price:price,
         productName:data.productName,
         productId:data.productId,
         sellerUsername:data.sellerUsername,
         sellerId:data.sellerId,
         buyerUsername:this.context.username,
         buyerId:this.context.userId,
         stripe_user_id:data.sellerStripeId,
        })
        .then(function(response){      
          if (response) console.log("Purchase Complete!")
          if (response) component.setState({complete: true});
            })
        .catch(function(error){console.log(error)})
      }
  
    render() {
      if (this.state.complete) return <h1>Purchase Complete</h1>;

      return (
        <div className="checkout">
          
          <Paper elevation={3} style={{padding:"3vw"}}> 
            <p>Would you like to complete the purchase?</p>
            <CardElement {...createOptions()} /> 
              Delivery Type: <select><option>Local Meetup</option></select>
              <button onClick={this.submit} style={this.context.styles.shared.blueButton}>Purchase</button>
              <br></br>
              <br></br>
          </Paper>
        </div>
      );
    }
  }
CheckoutForm.contextType = AppContext
export default injectStripe(CheckoutForm);