import React from "react";
import "./BoardsCss.css";
import Boards from "./Boards";
import { useState } from "react";
import AddTask from "../AddTaskModule/AddTask";

function BoardsContainer() {
  const [boards, setBoards] = useState([
    {
      boardId: 1,
      title: "Uni",
      tasks: [
        {
          taskTitle: "Task1",
          description: "ospgnengpengoegrponeogn",
          createdDate: new Date(),
        },
      ],
    },
    {
      boardId: 2,
      title: "Uni2",
      tasks: [
        {
          taskTitle: "Task2",
          description: "ospgnengpengoegrponeogn",
          createdDate: new Date(),
        },
      ],
    },
  ]);

  return (
    <div className="boards-container">
      {boards.map((board) => (
        <Boards board={board} />
      ))}
      <AddTask />
    </div>
  );
}

export default BoardsContainer;
