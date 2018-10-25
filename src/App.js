import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar';
import Example from './Components/Modal'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Example />
      </div>
    );
  }
}

export default App;
