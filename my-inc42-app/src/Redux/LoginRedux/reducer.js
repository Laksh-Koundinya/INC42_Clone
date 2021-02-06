import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, USER_GOOGLE_SUCCESS, USER_LOGOUT_SUCCESS } from "./actionType";

const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    data: [],
    token: "",
    username: "",
    google:false
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload.token,
                username: payload.username,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case USER_LOGOUT_SUCCESS: {
            return {
                loading: false,
                error: false,
                isAuth: false,
                google:false
            };
        }

        case USER_GOOGLE_SUCCESS:{
            return{
                google:true,
                data:payload
            }
        }
        default:
            return state;
    }
};

export default reducer;
