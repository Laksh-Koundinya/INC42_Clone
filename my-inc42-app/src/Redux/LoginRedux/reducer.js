import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"


 const initState = {
    isAuth:false,
    isLoading:false,
    isError:false,
    data:[]
}


const reducer = (state = initState,{type,payload}) => {
    switch(type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                data: payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        default:
            return state
    }
}

export default reducer