import React, { Component } from 'react';
import { Consumer } from './Provider';

class TodoItem extends Component {
  render() {
    let i = this.props.index;
    return(
      <Consumer>
        {(context) =>
          <a onClick={() => context.markCompleted(this.props.index)}>
            {`Completed: ${context.todos[i].completed ? 'True' : 'False'}, `}
            {context.todos[this.props.index]['title']}
          </a>
        }
      </Consumer>
    );
  }
};

export default TodoItem;
