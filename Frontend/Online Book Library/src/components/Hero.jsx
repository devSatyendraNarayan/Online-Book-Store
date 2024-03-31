/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

function Hero() {
  return (
    <>
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800  h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="flex flex-col items-center px-4 py-16 text-center md:px-24">
              <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                Unlock
                <span className="text-violet-600 "> New Worlds</span> with Every
                Page
              </h1>
              <p className="px-0 mt-8 mb-12 text-lg">
                Welcome to our bookstore, a place where book lovers like you can
                discover amazing stories from around the world. Whether you're
                into classics or the latest bestsellers, we've got something for
                you.
              </p>
              <label className="input input-bordered flex items-center gap-2 dark:bg-gray-50 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <div className="flex flex-wrap justify-center">
                <div>
                  <a className="btn px-8 py-2 h-16 m-2 text-lg bg-violet-600 text-gray-50 hover:dark:bg-gray-50 dark:hover:text-violet-600 duration-300 ">
                    Subscribe
                  </a>
                </div>
                <div>
                  <a className="btn px-8 py-2 h-16 m-2 text-lg dark:bg-gray-50  dark:text-gray-800 hover:dark:bg-violet-600 hover:dark:text-gray-50 duration-300 ">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
