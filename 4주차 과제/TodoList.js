import React, { useEffect } from "react";

function Todo({ newTodo, onRemove, onToggle }) {
  return (
    <div className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={newTodo.active}
          onChange={() => onToggle(newTodo.id)}
        />
        <b style={{ textDecoration: newTodo.active ? "line-through" : "none" }}>
          {newTodo.todo}
        </b>
      </div>
      <button className="todo-button" onClick={() => onRemove(newTodo.id)}>
        미루기
      </button>
    </div>
  );
}

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.map((newTodo) => (
        <Todo
          newTodo={newTodo}
          key={newTodo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
