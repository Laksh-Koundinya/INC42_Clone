import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselCard } from "../Pages/CarouselCard";

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
  
     
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
