import React, { Component } from 'react';

import Header from './../header/Header';
import ToDoList from './../todolist/ToDoList';
import {ContextProvider} from './../../context/ContextStore';
import './App.css';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <Header />
          <ToDoList/>
        </div>
      </ContextProvider>
  );
  }
}

export default App;
