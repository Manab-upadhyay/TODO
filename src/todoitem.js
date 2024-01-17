// todoitem.js
import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <li>{props.text}</li>
      <button onClick={() => props.onDelete(props.id)}>
        <span>Delete</span>
      </button>
    </div>
  );
}

export default ToDoItem;
