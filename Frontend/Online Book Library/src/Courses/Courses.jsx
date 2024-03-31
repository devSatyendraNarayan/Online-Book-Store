/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import CoursesList from "../components/CoursesList";

function Courses() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col min-h-screen dark:bg-gray-100 dark:text-gray-800 ">
       
        <CoursesList/>
      </div>

      <Footer />
    </>
  );
}

export default Courses;
