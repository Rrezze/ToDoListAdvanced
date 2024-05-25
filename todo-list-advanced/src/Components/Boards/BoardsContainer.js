import React from "react";
import "./BoardsCss.css";
import Boards from "./Boards";

function BoardsContainer() {
  return (
    <div className="boards-container">
        <Boards/>
        <Boards/>
        <Boards/>

        
    </div>
  );
}

export default BoardsContainer;
