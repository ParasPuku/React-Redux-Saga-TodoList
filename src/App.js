import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React-Redux-Saga-TodoList</h1>
        <Todo />
      </div>
    </Provider>
  );
}
