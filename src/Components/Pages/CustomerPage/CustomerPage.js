import React, { Component } from 'react';

class CustomerPage extends Component {

  state = {
    fname: "",
    lname: "",
    address: ""
  }
  onInputChange = (input) => (event) => {

  }
  render() {
    return (
      <div>
        <h1> Customer Page </h1>
        <input type="text" onChange={this.onInputChange('fname')} placeholder="Enter First Name" />
        <input type="text" onChange={this.onInputChange('lname')} placeholder="Enter Last Name" />

        <input type="text" onChange={this.onInputChange('address')} placeholder="Enter Address" />

      </div>
    );
  }
}

export default CustomerPage;
