import React, { Component } from 'react';
import { Consumer } from './Provider';
import TodoItem from './TodoItem';


class TodoList extends Component {
  render() {
    return (
      <Consumer>
        {(context) =>
          <ul>
            {context.todos.map((todo, index) => (
              <li key={todo.id}>
                 <TodoItem index={index} title={todo.title} completed={todo.completed} />
               </li>
            ))}
          </ul>
        }
      </Consumer>
    );
  }
}

export default TodoList;
