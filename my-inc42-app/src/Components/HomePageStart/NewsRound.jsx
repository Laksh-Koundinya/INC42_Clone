import React from "react"
import { useHistory } from "react-router-dom"
import { NewsGrid } from "./NewsGrid"
import styles from "./NewsRound.module.css"


const NewsRound=(props)=>{
    console.log(props.data,"News Component")
    const history = useHistory()
    const gotoNewsPage=()=>{
        history.push("/allnews")

    }

    return(
        <div>
        <div style = {{display:"flex",justifyContent:"space-between",paddingLeft:"40px",paddingRight:"70px"}}>
            <h1 style = {{color:"#d81757"}}>News Doing The Rounds</h1>
            <h4  className = {styles.classh4}style = {{color:"#707070"}} onClick = {gotoNewsPage}>VIEW ALL{'>'}  </h4>

        </div>
        <div>
            <NewsGrid data = {props}/> 
        </div>
       
        </div>
    )
}

export {NewsRound}