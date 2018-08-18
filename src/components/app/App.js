import React, { Component } from 'react';

import Header from './../header/Header';
import ToDoList from './../todolist/ToDoList';
import './App.css';

class App extends Component {
  render() {
    var toDoList = [
        {
            'completed': true,
            'text': 'Element 1',
        },
        {
            'completed': false,
            'text': 'Element 2'
        }
    ];
    return (
      <div className="App">
        <Header />
        <ToDoList todolist={toDoList}/>
      </div>
  );
  }
}

export default App;
