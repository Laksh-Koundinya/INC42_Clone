import { FETCH_FEATURE_NEWS_FAILURE, FETCH_FEATURE_NEWS_REQUEST, FETCH_FEATURE_NEWS_SUCCESS } from "./actionTypes"

const initialState = {
    featureNews:[],
    isLoading:false,
    isError:false
}

export const featureNewsReducer=(state = initialState,{type,payload}) =>{
    switch(type){
        case FETCH_FEATURE_NEWS_REQUEST: 
                            return{
                                    ...state,
                                    isLoading:true
                        }
        case FETCH_FEATURE_NEWS_SUCCESS: 
            return{
                ...state,
                isLoading:false,
                featureNews:payload

            }
        case FETCH_FEATURE_NEWS_FAILURE: 
                        return{
                                ...state,
                                isLoading:false,
                                isError:true
                    }
        

        default:return state
    }
}