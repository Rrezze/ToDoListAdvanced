import React from 'react'
import "./BoardsCss.css";

function Boards() {
  return (
        <div className="main-board">
        <div className="board-label">
          <div className="label-text">Uni</div>
        </div>
        <div className="content-board">
          <div className="board-items">Asnongen</div>
          <div className="board-items">Asnongen</div><div className="board-items">Asnongen</div><div className="board-items">Asnongen</div>
          <div className="btn-container">
            <button className="board-btn">Add</button>
          </div>
        </div>
      </div>
  )
}

export default Boards