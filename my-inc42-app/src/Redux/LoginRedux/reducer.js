import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"



export const initState = {
    isAuth:false,
    isLoading:false,
    isError:false
}


const reducer = (state = initState,{type,payload}) => {
    switch(type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isAuth:true
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        
        default:
            return state
    }
}

export default reducer