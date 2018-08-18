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
          var toDoList = this.state.data.toDoList;
          var newId = toDoList.length;

          this.setState({
            toDoList: [...toDoList, {
              completed: false,
              text: task,
              id: newId
            }]
          });
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
