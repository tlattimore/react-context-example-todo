import React, { Component } from 'react';
import { Consumer } from './Provider';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

/**
 * The main list of todos.
 *
 * This should probably leverage .reduce() instead of .map().
 *
 * @todo: make these class names more sensable.
 * @todo: abstract each ul into seperate component.
 */

class Main extends Component {
  render() {
    return (
      <Consumer>
        {(context) =>
          <form onSubmit={event  => {
              event.preventDefault();
            }}
            className="main"
           >
            <CreateTodo />
            <TodoList title="Todo" completed={false} />
            <TodoList title="Completed" completed={true} />
          </form>
        }
      </Consumer>
    );
  }
}

export default Main;
