import React from "react";


const CarouselCard=()=>{


    return(
        <div style = {{height:"370px",width:"260px",margin:"5px", borderRadius:"10px",border:"1px solid green"}}>
            <img src = "https://im.indiatimes.in/content/2020/Nov/Train-gets-saved-by-whale-structure_5fa0e81f8294c.png"  style = {{height:"136px" }}/>
            <h5>Category</h5>
            <div>Narrow Escape: Dutch Whale Tail Structure Catches Metro Train From Falling,During a lucky narrow escape w</div>
        <br></br>

        <div style = {{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div>Author Name</div>
            <div>Date</div>
        </div>
        </div>

    )
}
export {CarouselCard}