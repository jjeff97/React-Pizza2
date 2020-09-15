import React, { Component } from 'react';

class PizzaPage extends Component {

  state = {
    currentPizza: {
      toppings: '',
      size: ''

    }
  }
  selectToppings = (toppings) => (event) => {
    this.setState({
      currentPizza: {
        ...this.state.currentPizza,
        toppings
      }
    },() => {
      console.log(this.state);
    })
  };

  selectSize = (size) => (event) => {};

  render() {
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
          <button>Add to order!</button>
        </div>

        <ul>LIST OF PIZZAS</ul>

        <div>
          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default PizzaPage;
