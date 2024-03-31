import React from "react";

function Cards({ item }) {
  return (
    <div className="flex justify-center ">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl m-4 ">
        <div className="card bg-base-100 hover:scale-105 ease-in-out duration-300 shadow-xl dark:bg-gray-50 dark:text-gray-900 ">
          <figure>
            <img src={item.image} alt="Books Cover Page" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge bg-violet-600 text-white">
                {item.category}
              </div>
            </h2>
            <p>
              <span className="font-bold">Author: </span>
              {item.author}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline hover:text-gray-50 hover:bg-violet-600 p-3">
                {item.price}
              </div>
              <div className="badge badge-outline hover:text-gray-50 hover:bg-violet-600 p-3">
                {item.name}
              </div>
              <div className="badge badge-outline hover:text-gray-50 hover:bg-violet-600 p-3 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
