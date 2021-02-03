import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS ,GET_NEWS_FAILURE, FILTER_NEWS_SUCCESS} from "./actionTypes";
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

// filtering data based on tags
export const filterNewsRequest = () =>{
    return{
        type:FILTER_NEWS_SUCCESS,
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
        type:FILTER_NEWS_SUCCESS,
        payload:payload
    }
}
export const filterNews = (label) => (dispatch) => {
    dispatch( filterNewsRequest() )
    label = label.toLowerCase()
    const config ={
        method:"get",
        url: `https://mock-server-anusha.herokuapp.com/${label}`,
    
    }

    axios(config)
     .then( res => dispatch( filterNewsSuccess( res.data ) ) )
     .catch( err => dispatch( filterNewsFailure( {"message":"filtering data failure"} ) ) )

}