import { FETCH_FEATURE_NEWS_FAILURE, FETCH_FEATURE_NEWS_REQUEST, FETCH_FEATURE_NEWS_SUCCESS } from "./actionTypes"
import axios from "axios"


export const featureNewsRequest = () =>{
    return{
        type:FETCH_FEATURE_NEWS_REQUEST,
    }
}
export const featureNewsSuccess = (payload) =>{
    return{
        type:FETCH_FEATURE_NEWS_SUCCESS,
        payload:payload
    }
}
export const featureNewsFailure = (payload) =>{
    return{
        type:FETCH_FEATURE_NEWS_FAILURE,
        payload:payload
    }
}
export const fetchFeatureNewsData = () => (dispatch) => {
    dispatch( featureNewsRequest() )
    
    axios({
        method:"GET",
        url:"https://mock-server-anusha.herokuapp.com/features"
    })
     .then( res => dispatch( featureNewsSuccess( res.data ) ) )
     .catch( err => dispatch( featureNewsFailure( {"message":"unable to find features news"} ) ) )

}