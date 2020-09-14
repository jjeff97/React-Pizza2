import React, { Component } from 'react';

class PizzaPage extends Component {

  state = {
    currentPizza: {
      toppings: '',
      size: ''

    }
  }
  selectToppings = (topping) => (event) => {
    this.setState({
      currentPizza:
    })
  };

  selectSize = (size) => (event) => {};

  render() {
    return (
      <div>
        <h1> Pizza Page </h1>
        <div>
          <button onCLick={this.selectToppings('cheese')}>Cheese</button>
          <button onCLick={this.selectToppings('sausage')}>Sausage</button>
          <button onCLick={this.selectToppings('pepperoni')}>Pepperoni</button>
        </div>

        <div>
          <button onCLick={this.selectSize('small')}>Small</button>
          <button onCLick={this.selectSize('medium')}>Medium</button>
          <button onCLick={this.selectSize('large')}>Large</button>
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
