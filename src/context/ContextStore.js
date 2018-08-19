import React from 'react';

var ToDoContext = React.createContext();

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [
        {
          completed: false,
          text: 'Buy a t-shirt',
          id: 0,
        },
        {
          completed: true,
          text: 'Buy a pant',
          id: 1,
        }
      ],
      actions: {
        addToList: (task) => {
          var toDoList = this.state.toDoList;
          var newId = toDoList.length;
          var taskObject = {
            completed: false,
            text: task,
            id: newId,
          };

          toDoList = [...toDoList, taskObject];

          this.setState({
            toDoList: toDoList,
          });
        },
        toggleCompleteState: (id) => {
          var toDoList = this.state.toDoList;
          toDoList[id].completed = !toDoList[id].completed;

          this.setState({
            toDoList: toDoList,
          })
        }
      }
    }
  }

  render() {
    return (
      <ToDoContext.Provider value={this.state}>
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}

var ContextConsumer = ToDoContext.Consumer;

export {
  ContextProvider,
  ContextConsumer
};
