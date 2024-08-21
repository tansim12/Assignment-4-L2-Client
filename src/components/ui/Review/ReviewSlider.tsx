import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../../types/reviewSlides.type";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function StyledSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
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
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="slider-container mx-auto p-2 max-w-screen-xl">
      <Slider {...settings}>
        {reviews?.length &&
          reviews?.map((review, index) => (
            <div key={index} className="p-2">
              <div
                className={`flex items-center justify-center rounded-lg `}
              >
                <ReviewCard
                  title={review.title}
                  content={review.content}
                  author={review.author}
                  imageUrl={review.imageUrl}
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default StyledSlider;
