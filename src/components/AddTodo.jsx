import React, { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("")
    setTodoName("");
  };
  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter text here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleDateChange} value={dueDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButtonClick}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
