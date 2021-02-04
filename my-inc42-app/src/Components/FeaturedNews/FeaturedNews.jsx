import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNewsData } from "../../Redux/actionCreators";
import { fetchFeatureNewsData } from "../../Redux/FeaturesData/actionCreators";
import { BigCard } from "../HomePageStart/Cards/BigCard";
import { PaginationRounded } from "../Pagination/Pagination";


const FeaturedNews=()=>{
    const featureNewsData = useSelector((state)=>state.featurenews.featureNews)
    const dispatch = useDispatch()
    const [page,setPage] = useState(1)
    const history = useHistory()
    

    const [limit,setLimit] = useState(4)
    
    useEffect(()=>{
       dispatch(fetchFeatureNewsData())
    
    },[])
    const goToDisplayNews = (id,data) =>{
        const location = {
            pathName: `/featured-news/${id}`,
            state:{
                data:data
            }
        }
        console.log(location,"loc")
        history.push( location.pathName )
    }
    //console.log(newsData)
    const totalcount = Math.ceil(featureNewsData && featureNewsData.length / limit)

    const handlePageChange = (event,value) =>{
        setPage(value)
    }
    return(
        <div style = {{display:"flex",width:"700px", margin:"auto" , flexDirection:"column"}}>
           
            {featureNewsData?.filter((_,index)=> index >= (page - 1)  * limit && index < page * limit).map(item => {
                return <BigCard key = {item.id} data = {item}  goToDisplayNews = {  goToDisplayNews } />
            })}
            <div style = {{height:"70px"}}></div>
            <PaginationRounded total = {totalcount}
            page = {page}
            handlePageChange = {handlePageChange} />


        


        </div>
    )
}
export {FeaturedNews}