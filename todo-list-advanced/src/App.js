import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:function?/:id?" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
