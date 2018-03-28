import React, { Component } from "react";
import { render } from "react-dom";
import style from './style';
import { AppProvider } from './Provider';
import TodoList from './TodoList';


class App extends Component {
  render() {
    return (
      <div className={style}>
        <TodoList />
      </div>
    );
  }
}

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
