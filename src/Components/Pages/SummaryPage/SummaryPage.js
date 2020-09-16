import React, { Component } from 'react';
import { connect} from 'react-redux';


class SummaryPage extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1> Summary Page </h1>
        <div>
          <p>{this.props.store.customerReducer.fname}</p>
          <p>{this.props.store.customerReducer.lname}</p>
          <p>{this.props.store.customerReducer.address}</p>

        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({store});

export default connect(mapStoreToProps)(SummaryPage);
