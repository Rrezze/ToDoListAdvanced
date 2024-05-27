import React from "react";
import "./BoardsCss.css";
import AddTask from "../AddTaskModule/AddTask";
import { useParams, useNavigate } from "react-router-dom";

function Boards(props) {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="main-board">
      <div className="board-label">
        <div className="label-text">{props.board.title}</div>
      </div>
      <div className="content-board">
        {props.board.tasks.map((task) => (
          <div className="board-items">{task.taskTitle}</div>
        ))}
        <div className="btn-container">
          <button onClick={() => navigate(`./addTask/${props.board.boardId}`)} className="board-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Boards;
