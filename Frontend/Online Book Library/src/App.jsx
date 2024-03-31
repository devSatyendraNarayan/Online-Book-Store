/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Courses from "./Courses/Courses.jsx";
import SignUp from "./components/SignUP.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={<Courses />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
