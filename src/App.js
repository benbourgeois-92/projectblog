import React, { Component } from 'react';

import Menu from './components/Menu';
import Board from './components/Board';

import './App.css';

class App extends Component {
  constructor(){
    super();


  }
  render() {
    return (
      <div className="App">
     

        <Menu />
        <div className="container">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
