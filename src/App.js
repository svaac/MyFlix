import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//components
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  );
}

export default App;
