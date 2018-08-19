import React from 'react';

var ToDoContext = React.createContext();

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxId: 1,
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
          var newId = this.state.maxId+1;
          var taskObject = {
            completed: false,
            text: task,
            id: newId,
          };

          toDoList = [...toDoList, taskObject];

          this.setState({
            toDoList: toDoList,
            maxId: newId,
          });
        },
        toggleCompleteState: (id) => {
          var toDoList = this.state.toDoList;

          for (var i=0;i<toDoList.length;i++){
            if (toDoList[i].id === id){
                toDoList[i].completed = !toDoList[i].completed;
                break;
            }
          }

          this.setState({
            toDoList: toDoList,
          })
        },
        deleteTask: (id) => {
          var toDoList = this.state.toDoList;

          toDoList = toDoList.filter(element => element.id !== id);
          this.setState({
            toDoList: toDoList
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
