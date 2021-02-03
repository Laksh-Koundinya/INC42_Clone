import React from "react";
import CustomArrows from "./HomeCarousel";
import { NewsRound } from "./NewsRound";
import SubscriptionBar from "./SubscriptionBar";


const FeaturedStories=(props)=>{
    console.log(props.data,"Stories")
    return(
        <>
        <div style = {{width:"100%",backgroundImage: "linear-gradient(90deg,#d81757 0%,#e4381b 100%)",color:"white",display:"flex",paddingTop:"20px",height:"320px"}}>
            <h1>Featured Stories</h1>
        </div>
        <div style = {{marginTop:"-200px"}}>
            <CustomArrows data = {props.data} />
        </div>
       <div style = {{height:"40px"}}></div>
        <SubscriptionBar />
        <div style = {{height:"40px"}}></div>
        <NewsRound data = {props.data } />

        </>
    )
}
export {FeaturedStories}