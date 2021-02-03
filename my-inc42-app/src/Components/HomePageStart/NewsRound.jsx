import React from "react"
import { NewsGrid } from "./NewsGrid"


const NewsRound=(props)=>{
    console.log(props.data,"News Component")

    return(
        <div>
        <div style = {{display:"flex",justifyContent:"space-between",paddingLeft:"40px",paddingRight:"70px"}}>
            <h1 style = {{color:"#d81757"}}>News Doing The Rounds</h1>
            <h4 style = {{color:"#707070"}} onMouseOver = {{color:"pink"}}>VIEW ALL{'>'}  </h4>

        </div>
        <div>
            <NewsGrid data = {props}/> 
        </div>
        </div>
    )
}

export {NewsRound}