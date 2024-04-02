/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Courses from "./Courses/Courses.jsx";
import SignUp from "./components/SignUP.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../src/context/AuthProvider.jsx";

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
