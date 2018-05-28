import React, { Component } from 'react';
import { Consumer } from './Provider';
import PropTypes from 'prop-types';

/**
 * A single todo item.
 */
class TodoItem extends Component {
  constructor() {
    super();

    this.titleInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.titleInput.current.focus();
  }

  componentDidMount() {
    let doFocusText = (this.props.title === '' && !this.props.completed);
    if (doFocusText === true) {
      this.focusTextInput();
    }
  }

  todoItemClassName(isCompleted) {
    let className = 'todo-item';

    if (isCompleted === true) {
      className = `${className} todo-item--completed`;
    }

    return className;
  }

  handleKeyPress(event) {
    // If the enter key is pressed move focus
    // away from the input.
    if (event.key === 'Enter') {
      event.target.blur();
    }
  }

  render() {
    // Consume the data from the provider.
    return(<Consumer>
      {(context) =>
      //              <TodoItem id={todo.id} index={todo.lookupKey} title={todo.title} completed={todo.completed} />
        <div
          className={this.todoItemClassName(this.props.completed)}
          data-id={this.props.id}
        >
          <label className="todo-item__checkbox">
            <span className="todo-item__checkbox-label">
              Toggle completion state of {this.props.title} action
            </span>
            <input
              name="toggleCompletion"
              type="checkbox"
              className="todo-item__checkbox-input"
              checked={this.props.completed}
              onChange={() => context.toggleTodoCompletion(this.props.index)}
            />
          </label>

          <label className="todo-item__title-label">
            Update title of {this.props.title} action
          </label>
          <input
            className="todo-item__title"
            type="text"
            name="todo-title"
            ref={this.titleInput}
            value={this.props.title}
            onChange={(input) => context.updateTodoTitle(input, this.props.index)}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      }
    </Consumer>
  )}
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default TodoItem;