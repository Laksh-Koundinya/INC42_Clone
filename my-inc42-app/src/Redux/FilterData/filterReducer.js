import { FILTER_NEWS_FAILURE, FILTER_NEWS_REQUEST, FILTER_NEWS_SUCCESS } from "./actionTypes"

const initState = {
    filteredData:[],
    error: null,
    loading:null,
    message:"",
    results_found:0
}
export const filterReducer = ( state = initState, {type,payload} ) => {

    switch(type){

        case FILTER_NEWS_REQUEST:{
            return{
                loading:true
                
            }
        }

        case FILTER_NEWS_SUCCESS:{
            return{
                loading:false,
                error:false,
                filteredData: payload
            }
        }case FILTER_NEWS_FAILURE:{
            return{
                loading:false,
                error:true,
                message: payload.message
                
            }
        }
        default:
            return state
    }

}