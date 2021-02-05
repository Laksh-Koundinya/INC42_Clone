import React, { useEffect,useSelector } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { getNewsData } from "../../Redux/actionCreators";
import { NormalCard } from "./Cards/NormalCard";
import styles from "./gridDisplay.module.css"

export const NewsGrid=(props)=>{
    
    const {data} = props.data
    const history = useHistory()
    
console.log(data)
const goToDisplayNews = (id,data) =>{
    const location = {
        pathName: `/news-details/${id}`,
        state:{
            data:data
        }
    }
    console.log(location,"loc")
    history.push( location.pathName )
}

   
    return (
        <div className = {styles.gridDisplay}>
             {data && data.filter((item,i)=> i < 9)
          .map((item) =>  <NormalCard key = {item.id} data = {item}  goToDisplayNews = {  goToDisplayNews }/>)
          }
      
            </div>
    )
}
