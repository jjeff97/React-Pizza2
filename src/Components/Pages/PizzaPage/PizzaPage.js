import React, { Component } from 'react';

class PizzaPage extends Component {
  state = {
    order: [],
    currentPizza: {
      toppings: '',
      size: '',
    },
  };
  selectToppings = (toppings) => (event) => {
    this.setState(
      {
        currentPizza: {
          ...this.state.currentPizza,
          toppings,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  selectSize = (size) => (event) => {
    this.setState(
      {
        currentPizza: {
          ...this.state.currentPizza,
          size,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addPizzaToOrder = (event) => {
    this.setState(
      {
        order: [...this.state.order, this.state.currentPizza],
      },
      () => {
        this.clearCurrentPizza();
      }
    );
  };

  clearCurrentPizza() {
    this.setState(
      {
        currentPizza: {
          toppings: '',
          size: '',
        },
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    const pizzaArray = this.state.order.map((pizza, index) => {
      return (
        <li>
          {pizza.size} - {pizza.toppings}
        </li>
      );
    });
    return (
      <div>
        <h1> Pizza Page </h1>
        <div>
          <button onClick={this.selectToppings('cheese')}>Cheese</button>
          <button onClick={this.selectToppings('sausage')}>Sausage</button>
          <button onClick={this.selectToppings('pepperoni')}>Pepperoni</button>
        </div>

        <div>
          <button onClick={this.selectSize('small')}>Small</button>
          <button onClick={this.selectSize('medium')}>Medium</button>
          <button onClick={this.selectSize('large')}>Large</button>
        </div>

        <div>
          <button onClick={this.addPizzaToOrder}>Add to order!</button>
        </div>
        <h3>Order:</h3>
        <ul>{pizzaArray}</ul>

        <div>
          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default PizzaPage;
