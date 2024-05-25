import React from "react";
import { useState } from "react";

function Header() {
  const [today, setToday] = useState(new Date());

  return (
    <div className="header">
      <div className="title-div">
        <div className="header-title">Daily To Do List</div>
      </div>
      <div className="date-div">
        <div className="header-date">Date : {today.toDateString()}</div>
      </div>
    </div>
  );
}

export default Header;
