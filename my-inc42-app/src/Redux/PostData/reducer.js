import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../LoginRedux/actionType"
import { POST_DATA_REQUEST } from "./actionType"

const initState = {
    success : false,
    isLoading:false,
    data : []
}

const reducer = (state = initState,{type,payload}) => {
    switch(type) {
        case POST_DATA_REQUEST:
            return {
                ...state,
                isLoading:true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading:false,
                success:true,
                data : payload
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                success:false,
                data:payload
            }
        
        default:
            return state
    }   

}

export default reducer