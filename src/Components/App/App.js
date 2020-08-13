import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import TypePage from '../Pages/TypePage/TypePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sal's Famous Pizzaria</h1>
       < Router>
       <Route exact path="/" component={TypePage}/>
       </Router>
      </div>
    );
  }
}

export default App;
