import React from 'react';
import { Consumer } from './Provider';

const CreateTodo = () => {
  return(
    <Consumer>
      {(context) =>
        <button onClick={context.createTodo} type="button" name="createTodo">
          Add todo +
        </button>
      }
    </Consumer>
  );
}

export default CreateTodo;
