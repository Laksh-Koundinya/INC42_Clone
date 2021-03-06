import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import {useSelector} from "react-redux"
import { NewsCard } from '../HomePageStart/Cards/NewsCard/NewsCard'



export const DisplayFeatureContent = () => {

    const [reqNews, setReqNews] = useState("")
    const data = useSelector( (state) => state.featurenews.featureNews )

    const params = useParams()
    const {id} = params
    

    useEffect(() => {
        const findNewsItem = data?.find( (item) => (item.id).toString() === id.toString() )    
        setReqNews(findNewsItem)  
    }, [])

    return (
        <div>
           
            <NewsCard data = {reqNews}/>
            
            
        </div>
    )
}
