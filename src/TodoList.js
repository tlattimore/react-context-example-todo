import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Provider';
import TodoItem from './TodoItem';

/**
 * The main list of todos.
 *
 * This should probably leverage .reduce() instead of .map().
 *
 * @todo: make these class names more sensable.
 * @todo: abstract each ul into seperate component.
 */
class TodoList extends Component {

  completed = this.props.completed;

  /**
   * A label that contains the length of the current list.
   */
  listLength(list) {
    let listLength = this.getTodos(list).length;
    return this.completed === true ? `${listLength} Completed` : `${listLength} Remaining`;
  }

  /**
   * Get a list of all the items for the desired state.
   */
  getTodos(list) {
    let todos = list.reduce((accumulator, item, index) => {
      // Check if the current item is the status
      // you want in this list.
      if (item.completed === this.completed) {
        // Update the placeholder with the item.
        item.lookupKey = index;
        accumulator.push(item);
      }

      // Return the current result to the
      // next iteration.
      return accumulator;
    }, []);

    // This should probably be sorted...
    return todos;
  }

  render() {
    return (
      <Consumer>
        {(context) =>
          <fieldset className="todo-list">
            <legend className="todo-list__title">
              {this.props.title}
              <span className="todo-list__count">
                {this.listLength(context.todos)}
              </span>
            </legend>
            <ul className="todo-list__items">
              {this.getTodos(context.todos).map((todo, index) => (
                <li key={todo.id}>
                  <TodoItem id={todo.id} index={todo.lookupKey} title={todo.title} completed={todo.completed} />
                </li>
              ))}
            </ul>
          </fieldset>
        }
      </Consumer>
    );
  }
}

TodoList.defaultProps = {
  completed: false,
}

TodoList.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default TodoList;
