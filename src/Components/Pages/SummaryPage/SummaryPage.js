import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryPage extends Component {

  confirmOrder =(event) => {
    //build out data for server
    //axios to server
    //on response nav to start
    const dataForServer = {
      customer: this.props.store.customerReducer,
      order: this.props.store.pizzaReducer,
      type: this.props.store.typeReducer
    };
    console.log(dataForServer);

    this.props.dispatch({type: 'CLEAR_ORDER_TYPE'});
    this.props.dispatch({type: 'CLEAR_CUSTOMER_INFO'});
    this.props.dispatch({type: 'CLEAR_PIZZA_ORDER'});

    this.props.history.push('/');

    //axios.post()-> data:dataForServer
    //.then - back to start
  }
  render() {
    console.log(this.props);
    const pizzaArray = this.props.store.pizzaReducer.map((pizza, index) => {
      return (
        <li key={index}>
          {pizza.size} - {pizza.toppings}
        </li>
      );
    });

    return (
      <div>
        <h1> Summary Page </h1>
        <div>
          <h5>{this.props.store.typeReducer}</h5>
          <p>{this.props.store.customerReducer.fname}</p>
          <p>{this.props.store.customerReducer.lname}</p>
          {this.props.store.customerReducer.address && (
            <p>{this.props.store.customerReducer.address}</p>
          )}
        </div>
        <ul>{pizzaArray}</ul>
        <button onClick={this.confirmOrder}>Confirm</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SummaryPage);
