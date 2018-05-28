import React, { createContext, Component } from "react";
import todos from './data/todos.json';

// Declare the React context.
const AppContext = createContext();

const { Provider, Consumer } = AppContext;

// Declare our provider.
// This use the Provider thingy that
// got added by createContext() above;
class AppProvider extends Component {
  state = {
    todos: [
      ...todos
    ]
  }
  render() {
    return(
      <Provider value={{
        todos: this.state.todos,
        createTodo: (event) => {
          let currentState = Object.assign({}, this.state);
          currentState.todos.unshift({
            "userId": 1,
            "id": currentState.todos.length + 1,
            "title": '',
            "completed": false,
          });
          this.setState(currentState);
        },
        updateTodoTitle: (update, id) => {
          let currentState = Object.assign({}, this.state);
          currentState.todos[id].title = update.target.value;
          this.setState(currentState);
        },
        /**
         * Mark a todo as completed.
         */
        toggleTodoCompletion: (id) => {
          let currentState = Object.assign({}, this.state);
          currentState.todos[id].completed = !currentState.todos[id].completed;
          this.setState(currentState);
        }
      }}>
        {this.props.children}
      </Provider>
    );
  }
}


export { AppProvider, Consumer };
