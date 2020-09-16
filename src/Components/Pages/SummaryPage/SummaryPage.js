import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryPage extends Component {
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
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SummaryPage);
