import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
function handleChange(event) {
  const newValue = event.target.value;
  setInputText(newValue);
}

export default ToDoItem;