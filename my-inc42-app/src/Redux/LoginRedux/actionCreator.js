import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "./actionType"



export const loginReq = ()=> ({
    type:LOGIN_REQUEST
})

export const loginSuccess = (payload) => ({
    type:LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type:LOGIN_FAILURE,
    payload
})

