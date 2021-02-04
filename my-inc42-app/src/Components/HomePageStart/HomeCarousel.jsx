import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselCard } from "../Pages/CarouselCard";
import { NormalCard } from "./Cards/NormalCard";

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1     
    };
    const {data} = this.props;
    console.log(data,"Carosusel ---")
    
    return (
     
      <div>
    
       
        <Slider {...settings}>
          {data && data.filter((item,i)=> i < 7)
          .map((item) =>  <NormalCard key = {item.id} data = {item} />)
          }
       {/* <CarouselCard />
       <CarouselCard />
       <CarouselCard />
       <CarouselCard />
       <CarouselCard />
       <CarouselCard /> */}
         
        </Slider>
      </div>
    );
  }
}
