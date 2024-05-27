import React from "react";
import "./AddTaskCss.css";

function AddTask() {
  return (
    <div className="addTaskBackground">
      <div className="task-popup">
        <div className="title-container">
          <h1 className="add-task-title">AddTask</h1>
        </div>
        <div className="form-container">
          <div className="task-input">
            <label>Title:</label>
            <input type="text" />
            <label>Description:</label>
            <input type="text" />
          </div>
          <div className="btn-container">
          <button className="btn-task">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
