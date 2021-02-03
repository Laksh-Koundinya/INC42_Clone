import React, { useEffect,useSelector } from "react"
import { useDispatch } from "react-redux"
import { getNewsData } from "../../Redux/actionCreators";
import { NormalCard } from "./Cards/NormalCard";
import styles from "./gridDisplay.module.css"

export const NewsGrid=(props)=>{
    
    const {data} = props.data
    
console.log(data)

   
    return (
        <div className = {styles.gridDisplay}>
             {data && data.filter((item,i)=> i < 9)
          .map((item) =>  <NormalCard key = {item.id} data = {item} />)
          }
      
            </div>
    )
}
