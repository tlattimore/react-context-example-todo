import React from 'react';
import { Consumer } from './Provider';
import PropTypes from 'prop-types';

/**
 * A single todo item.
 */
const TodoItem = props => {
  /**
   * Utility to generate the class.
   *
   * Cleaner than a long ternary.
   */
  const className = (isCompleted) => {
    let className = 'todo-item';

    if (isCompleted === true) {
      className = `${className} todo-item--completed`;
    }

    return className;
  }

  const handleKeyPress = (event) => {
    // If the enter key is pressed move focus
    // away from the input.
    if (event.key === 'Enter') {
      event.target.blur();
    }
  }

  return(
    // Consume the data from the provider.
    <Consumer>
      {(context) =>
        <div
          className={className(context.todos[props.index].completed)}
          data-id={context.todos[props.index].id}
        >
          <label className="todo-item__checkbox">
            <span className="todo-item__checkbox-label">
              Toggle completion state of {context.todos[props.index].title} action
            </span>
            <input
              name="toggleCompletion"
              type="checkbox"
              className="todo-item__checkbox-input"
              checked={context.todos[props.index].completed}
              onChange={() => context.markCompleted(props.index)}
            />
          </label>

          <label className="todo-item__title-label">
            Update title of {context.todos[props.index].title} action
          </label>
          <input
            className="todo-item__title"
            type="text"
            name="todo-title"
            value={context.todos[props.index].title}
            onChange={(input) => context.updateItem(input, props.index)}
            onKeyPress={handleKeyPress}
          />
        </div>
      }
    </Consumer>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
}

export default TodoItem;
