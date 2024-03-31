import React from "react";
import BookList from "../../public/PaidBookList.json";
import Cards from "./Cards"
import { Link } from "react-router-dom"; // Fixed import statement

function CoursesList() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Learn, Grow, <span className="text-success">Succeed</span>: Explore
            a World of Knowledge
          </h1>
          <p className="mt-3 text-xl">
            Welcome to our online platform dedicated to empowering lifelong
            learners. Discover a wide array of courses designed to enhance your
            skills, expand your horizons, and unlock new opportunities. Whether
            you're looking to advance your career, pursue a passion, or simply
            grow personally, we have the perfect course for you.
          </p>
          <div className="mt-6">
            <Link to="/" className="btn bg-violet-600 text-gray-50 hover:dark:bg-gray-50 dark:hover:text-violet-600 duration-300 border-opacity-0"> {/* Fixed Link component */}
              Back
            </Link>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"> {/* Adjust mt-12 and gap-6 as needed */}
          {BookList.map((item) => (
            <div key={item.id} className="w-full">
              <Cards item={item}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CoursesList;
