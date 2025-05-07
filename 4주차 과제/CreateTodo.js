import React from "react";

function CreateTodo({ todo, onChange, onCreate, className }) {
  return (
    <div className={className}>
      <input name="todo" placeholder="할 것" onChange={onChange} value={todo} />
      <button className="create-button" onClick={onCreate}>
        추가
      </button>
    </div>
  );
}

export default CreateTodo;
