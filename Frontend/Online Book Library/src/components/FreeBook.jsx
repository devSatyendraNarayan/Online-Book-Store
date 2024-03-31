import React from "react";
import BookList from "../../public/BookList.json";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FreeBook() {
  const filterData = BookList.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-4 dark:bg-gray-100 dark:text-gray-800" >
        <div className="">
          <h1 className="font-bold text-xl pb-2">Book Categories Catalog</h1>
          <p>
            Explore a world of diverse literary genres with our curated
            collection of captivating stories and informative reads.
          </p>
        </div>

        <div>
          <div>
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
               
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
