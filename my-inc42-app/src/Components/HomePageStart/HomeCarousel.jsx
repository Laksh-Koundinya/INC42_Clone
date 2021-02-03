import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselCard } from "../Pages/CarouselCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
       
        <Slider {...settings}>
       <CarouselCard />
       <CarouselCard />
       <CarouselCard />
       <CarouselCard />
       <CarouselCard />
       <CarouselCard />
         
        </Slider>
      </div>
    );
  }
}
