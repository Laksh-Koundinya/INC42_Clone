import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS ,GET_NEWS_FAILURE} from "./actionTypes";
import axios from "axios"

export const getNewsRequest = () =>{
    return{
        type:GET_NEWS_REQUEST
    }
}

export const getNewsSuccess = (payload) =>{
    return{
        type:GET_NEWS_SUCCESS,
        payload:payload
    }
}

export const getNewsFailure = (payload) =>{
    return{
        type:GET_NEWS_FAILURE,
        payload:payload
    }
}

export const getNewsData = () =>(dispatch) =>{
    dispatch( getNewsRequest() )

    const config ={
        method:"get",
        url:"https://mock-server-anusha.herokuapp.com/news",
    
    }

    axios(config)
     .then( res => dispatch( getNewsSuccess( res.data ) ) )
     .catch( err => dispatch( getNewsFailure( {"message":"getting data failed"} ) ) )
}