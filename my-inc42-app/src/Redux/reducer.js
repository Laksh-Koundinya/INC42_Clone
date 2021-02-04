import { FILTER_NEWS_FAILURE, FILTER_NEWS_REQUEST, FILTER_NEWS_SUCCESS, GET_NEWS_FAILURE, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "./actionTypes";


const initState = {
    newsData:[],
    error: null,
    loading:null,
    message:"",
    results_found:0
}
export const reducer = ( state = initState, {type,payload} ) => {

    switch(type){
        case GET_NEWS_REQUEST:{
            return{
                loading:true
                
            }
        }

        case GET_NEWS_SUCCESS:{
            return{
                newsData:payload,
                loading:false,
                error:false,
                message:"getting the data is successful"
            }
        }

        case GET_NEWS_FAILURE:{
            return{
                loading:false,
                error:true,
                message:payload.message
            }
        }

        
        default:
            return state
    }

}