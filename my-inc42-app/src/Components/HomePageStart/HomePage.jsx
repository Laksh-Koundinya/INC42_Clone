
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getNewsData } from '../../Redux/actionCreators'

export const HomePage = () => {
    const newsData = useSelector( (state) => state.data )

    const dispatch = useDispatch()


    useEffect(() => {
        
        dispatch(getNewsData())
    }, [])


    console.log(newsData, "DTA")
    return (
        <div>
            
        </div>
    )
}
