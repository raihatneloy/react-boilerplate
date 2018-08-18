import React from 'react';

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
        <div>
          <input value={this.state.task} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={() => {
            data.actions.addToList(this.state.task);
            this.setState({
              task: ""
            });
          }}>Add Task</button>
          <ul>
            {
              data.toDoList.map((element) => {
                return (
                  <li>
                    {element.completed===true && <strike>{element.text}</strike>}
                    {element.completed===false && element.text}
                  </li>
                );
              })
            }
          </ul>
        </div>
      }
      </ContextConsumer>
    );
  }
}
