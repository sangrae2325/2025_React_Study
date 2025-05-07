import React, { useRef, useState } from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    todo: "",
  });
  const { todo } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "신나게 놀기",
      active: false,
    },
  ]);

  const nextId = useRef(2);
  const onCreate = () => {
    const newTodo = {
      id: nextId.current,
      todo,
    };

    setTodos(todos.concat(newTodo));

    setInputs({
      todo: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((newTodo) => newTodo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((newTodo) =>
        newTodo.id === id ? { ...newTodo, active: !newTodo.active } : newTodo
      )
    );
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo-List</div>
      <div className="todo-window">
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <CreateTodo
          className="create-todo"
          todo={todo}
          onChange={onChange}
          onCreate={onCreate}
        />
      </div>
    </div>
  );
}

export default App;
