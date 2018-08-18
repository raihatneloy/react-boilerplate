import React from 'react';

export default class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todolist.map((element) => {
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
    );
  }
}
