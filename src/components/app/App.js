import React, { Component } from 'react';

import Header from './../header/Header';
import ToDoList from './../todolist/ToDoList';
import {ContextProvider, ContextConsumer} from './../../context/ContextStore';
import './App.css';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <Header />
          <ContextConsumer>
            { data =>
              <ToDoList todolist={data.toDoList}/>
            }
          </ContextConsumer>
        </div>
      </ContextProvider>
  );
  }
}

export default App;
