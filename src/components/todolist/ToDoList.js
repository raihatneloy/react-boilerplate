import React from 'react';

import './ToDoList.css';
import {ContextConsumer} from '../../context/ContextStore';

export default class ToDoList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      task: ""
    }
  }

  handleInputChange(e){
    this.setState({
      task: e.target.value,
    });
  }

  render() {
    return (
      <ContextConsumer>
      { data =>
        <div className="todolist-box">
          <input value={this.state.task} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={() => {
            data.actions.addToList(this.state.task);
            this.setState({
              task: ""
            });
          }}>Add Task</button>
          <div>
          {
            data.toDoList.map((element) => {
              return (
                <div>
                  {element.completed===true && (
                  <div>
                    <input type="checkbox" onClick={() => data.actions.toggleCompleteState(element.id)}checked/>
                    <strike>{element.text}</strike>
                  </div>
                  )
                  }
                  {element.completed===false && (
                  <div>
                    <input type="checkbox" onClick={() => data.actions.toggleCompleteState(element.id)}/>
                    {element.text}
                  </div>
                  )
                  }
                </div>
              );
            })
          }
          </div>
        </div>
      }
      </ContextConsumer>
    );
  }
}
