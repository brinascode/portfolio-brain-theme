import React from 'react';
import axios from "axios"
import { Row, Column, Button } from "react-foundation"
import { Grid } from "@material-ui/core"
import { api } from "../../other_important/SharedVars.js"

//--------------------------------------------------------------COMPONENT-----------------------------------
class Inbox extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        selectedItem: [""], //capturing what the user click
        openedItem: { buyerConfirmed: { isTrue: false }, sellerConfirmed: { isTrue: false } }, //we store the actual opened request here now
        isItemOpened: "hidden",
        servicePrice: 0
      }
      this.selectItem = this.selectItem.bind(this)
      this.confirmFulfillment = this.confirmFulfillment.bind(this)
      this.confirmPrice = this.confirmPrice.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

  //Clicking an item from the inbox and opening it
  selectItem(e) {
    var component = this
    var selectedId = e.target.id
    var data = this.props.data

    for (var i = 0; i <= data.length - 1; i++) {
      for (var key in data[i]) {
        if (key === "_id" && data[i][key] === selectedId) 
        {
          var openedItem = data[i]
          
          //Whenever an item is selected, we get the buyer's or seller's phone number fresh from the server
          var contactForId = ""
          var type = this.props.type
          if (type === "buyer-purchases" || type === "buyer-service-requests") 
          {
            contactForId = openedItem.sellerId
          }
          else if (type === "seller-sales" || type === "seller-service-requests") 
          {
            contactForId = openedItem.buyerId
          }
          axios.post(api() + "/getUserContact", { userId: contactForId })
              .then(function (response) {
                    openedItem.phoneNumber = response.data.phoneNumber
                    component.setState({ openedItem: openedItem, isItemOpened: "visible" }) })
              .catch((error) => { console.log(error) })
        }
      }
    }
  }

  //For Purchases: both buyers and sellers
  confirmFulfillment(e){
      var id = e.currentTarget.id
      axios.post(
        api() + "/confirmFulfillment",
        { type: id, transactionId: this.state.openedItem._id }
      ).then((response) => {
        this.setState({ openedItem: response.data })
      })
        .catch((error) => { console.log(error) })
  }

    //For Services: Seller setting price
    confirmPrice(e){
      var id = e.currentTarget.id
      if (id === "seller-confirms-request-price") 
      {
        if (window.confirm(`You are confirming that your service will be: $ ${this.state.servicePrice}`)) 
        {
          axios.post(api() + "/confirmPrice", { type: id, transactionId: this.state.openedItem._id }).then((response) => {
            this.setState({ openedItem: response.data })
          }).catch((error) => {
            console.log(error)
          })
        }
        else if (id === "buyer") 
        {
          return null
        }
      }
    }

    handleChange(e){
      if (e.currentTarget.name === "servicePrice") {
        this.setState({ servicePrice: e.target.value })
      }
    }


    render() {
      if (this.props.type === "buyer-purchases") {
        return (

          <Grid container>
            <h4 style={{ fontFamily: "Nunito", fontSize: "4vh", float: "left" }}>
              <img src={process.env.PUBLIC_URL + "/images/icons/inbox.png"} width="8%" style={{ float: "left" }} />
              <sup style={{ float: "left", fontSize: "1.3vw", padding: "1vw", borderRadius: "500%", backgroundColor: "red", color: "white" }}>
                {this.props.data.length}
              </sup>
                      Inbox
                </h4>

            <Grid lg={12} md={12} sm={12} xs={12} style={{ overflowX: "scroll", height: "20vw", border: "solid #171b1e", textAlign: "left", borderRadius: "5px" }} >
              {this.props.data.map(item =>
                <h4 onClick={this.selectItem} id={item._id} style={{ color: "black" }} >
                  <span><i>Date here:</i></span>
                          For {item.productName} from {item.requesterUsername}
                </h4>
              )}
            </Grid>

            <div style={{ visibility: this.state.isItemOpened }}>
              <h3>You bought:
                      {this.state.openedItem.productName}
              </h3>
              <h3>From: {this.state.openedItem.buyerUsername}</h3><br></br>
              <h3>On:  {this.state.openedItem.dateCreated}</h3>
              <h4>Their phone number is: {this.state.openedItem.phoneNumber}</h4>
              <p>Please contact them within 4 days to schedule a local meetup and select yes for the following question</p>
              <p>
                Have you received your item?
                     {this.state.openedItem.buyerConfirmed.isTrue ?
                  <h3>You confirmed fulfillment of this item. The seller must also confirm for your purchase to be archived.</h3>
                  : <button onClick={this.confirmFulfillment} id="user-confirms-sale">Yes</button>
                }

              </p>
              <input type="textarea" id="message"></input>
              <h3> <button style={{ border: "solid black", padding: "5px" }}> Send </button> </h3>
              <h3> <button style={{ border: "solid black", padding: "5px" }}> Confirm request </button> </h3>
              <h3> <button style={{ border: "solid black", padding: "5px" }}> Cancel Request </button> </h3>
            </div>
          </Grid>

        )
      } else if (this.props.type === "seller-sales") {
        return (
          <div className="">

            <Column large={12} small={12} medium={12} style={{ borderRadius: "5px" }} >
              <h4 style={{ fontFamily: "Nunito", fontSize: "4vh", float: "left" }}>
                <img src={process.env.PUBLIC_URL + "/images/icons/inbox.png"} width="8%" style={{ float: "left" }} />
                <sup style={{ float: "left", fontSize: "1.3vw", padding: "1vw", borderRadius: "500%", backgroundColor: "red", color: "white" }}>
                  {this.props.data.length}
                </sup>
                      Inbox
                   </h4>

              <div style={{ overflowX: "scroll", height: "20vw", border: "solid #171b1e", textAlign: "left", borderRadius: "5px" }} >
                {this.props.data.map(item =>
                  <h4 onClick={this.selectItem} id={item._id} style={{ color: "black" }} >
                    <span><i>Date here:</i></span>
                          For {item.productName} from {item.requesterUsername}
                  </h4>
                )}
              </div>

              <div style={{ visibility: this.state.isItemOpened }}>
                <h3>You sold:
                      {this.state.openedItem.productName}
                </h3>
                <h3>To: {this.state.openedItem.buyerUsername}</h3><br></br>
                <h3>On:  {this.state.openedItem.dateCreated}</h3>
                <h4>Their phone number is: {this.state.openedItem.phoneNumber}</h4>
                <p>Please contact them within 4 days to schedule a local meetup and select yes for the following question</p>
                <p>
                  Have you delivered the item to the buyer?
                      {this.state.openedItem.sellerConfirmed.isTrue ?
                    <h3>You confirmed fulfillment of this item. The buyer must also confirm for your sale to be archived.</h3>
                    : <button onClick={this.confirmFulfillment} id="seller-confirms-sale">Yes</button>
                  }
                </p>
                <input type="textarea" id="message"></input>
                <h3> <button style={{ border: "solid black", padding: "5px" }}> Send </button> </h3>
                <h3> <button style={{ border: "solid black", padding: "5px" }}> Confirm request </button> </h3>
                <h3> <button style={{ border: "solid black", padding: "5px" }}> Cancel Request </button> </h3>
              </div>
            </Column>

          </div>)
      } else if (this.props.type === "buyer-service-requests") {
        return (
          <Grid container style={{ borderRadius: "5px" }}>

            <h4 style={{ fontFamily: "Nunito", fontSize: "4vh", float: "left" }}>
              <img src={process.env.PUBLIC_URL + "/images/icons/inbox.png"} width="8%" style={{ float: "left" }} />
              <sup style={{ float: "left", fontSize: "1.3vw", padding: "1vw", borderRadius: "500%", backgroundColor: "red", color: "white" }}>
                {this.props.data.length}
              </sup>
                Inbox
          </h4>

            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div style={{ overflowX: "scroll", height: "20vw", border: "solid #171b1e", textAlign: "left", borderRadius: "5px" }} >
                {this.props.data.map(item =>
                  <h4 onClick={this.selectItem} id={item._id} style={{ color: "black" }} >
                    <span><i>Date here:</i></span>
                        Requested {item.serviceName} by {item.sellerUsername}
                  </h4>
                )}
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div style={{ visibility: this.state.isItemOpened }}>
                <h3>You requested
                {this.state.openedItem.serviceName} by {this.state.openedItem.sellerUsername}
                </h3>
                <h3>On:  {this.state.openedItem.dateCreated}</h3>
                <h4>Their phone number is: {this.state.openedItem.phoneNumber}</h4>
                <p>Please contact them within 4 days to schedule a local meetup and select yes for the following question</p>

              </div>
            </Grid>
          </Grid>
        )
      }
      else if (this.props.type === "seller-service-requests") {

        return (
          <Grid container style={{ borderRadius: "5px" }} >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <h4 style={{ fontFamily: "Nunito", fontSize: "4vh", float: "left" }}>
                <img src={process.env.PUBLIC_URL + "/images/icons/inbox.png"} width="8%" style={{ float: "left" }} />
                <sup style={{ float: "left", fontSize: "1.3vw", padding: "1vw", borderRadius: "500%", backgroundColor: "red", color: "white" }}>
                  {this.props.data.length}
                </sup>

              </h4>

              <div style={{ overflowX: "scroll", height: "20vw", border: "solid #171b1e", textAlign: "left", borderRadius: "5px" }} >
                {this.props.data.map(item =>
                  <h4 onClick={this.selectItem} id={item._id} style={{ color: "black" }} >
                    <span><i>Date here:</i></span>
                              For {item.serviceName} from {item.buyerUsername}
                  </h4>
                )}
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} >
              <div style={{ visibility: this.state.isItemOpened }}>
                <h3>Request for:
                      {this.state.openedItem.serviceName} by {this.state.openedItem.buyerUsername}
                </h3>
                <h3>To: {this.state.openedItem.buyerUsername}</h3><br></br>
                <h3>On:  {this.state.openedItem.dateCreated}</h3>
                <h4>Their phone number is: {this.state.openedItem.phoneNumber}</h4>

                <p>Please contact them within 4 days to agree on the service details. When you have agreed on a **price, enter it here to confirm:
                      $ <input type="number" value={this.state.servicePrice} name="servicePrice" onChange={this.handleChange} /> <button onClick={this.confirmPrice} id="seller-confirms-request-price">Confirm</button>
                </p>

              </div>
            </Grid>
          </Grid>
        )

      } else if (this.props.type === "buyer-purchases-archives") {
        return (
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {this.props.data.map(item =>
                <div>
                  {item.productName}
                </div>
              )}
            </Grid>
          </Grid>

        )
      }
      else if (this.props.type === "seller-sales-archives") {
        return (
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {this.props.data.map(item =>
                <div>
                  {item.productName}
                </div>
              )}
            </Grid>
          </Grid>

        )
      }
    }
  }

  export default Inbox;
