import { FILTER_NEWS_FAILURE, FILTER_NEWS_REQUEST, FILTER_NEWS_SUCCESS } from "./actionTypes"
import axios from "axios"


export const filterNewsRequest = () =>{
    return{
        type:FILTER_NEWS_REQUEST,
    }
}
export const filterNewsSuccess = (payload) =>{
    return{
        type:FILTER_NEWS_SUCCESS,
        payload:payload
    }
}
export const filterNewsFailure = (payload) =>{
    return{
        type:FILTER_NEWS_FAILURE,
        payload:payload
    }
}
export const filterNews = (label) => (dispatch) => {
    dispatch( filterNewsRequest() )
    label = label.toLowerCase()
    const config ={
        method:"get",
        url: `https://mock-server-anusha.herokuapp.com/${label}`
    }

    axios(config)
     .then( res => dispatch( filterNewsSuccess( res.data ) ) )
     .catch( err => dispatch( filterNewsFailure( {"message":"filtering data failure"} ) ) )

}