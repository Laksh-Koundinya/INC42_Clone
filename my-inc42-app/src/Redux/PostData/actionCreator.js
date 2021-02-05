
import axios from "axios"
import {POST_DATA_REQUEST,POST_DATA_SUCCESS,POST_DATA_FAILURE} from "./actionType"

export const postDataReq = () => ({
    type:POST_DATA_REQUEST
})

export const postDataSuccess = (payload) => ({
    type:POST_DATA_SUCCESS,
    payload
})

export const postDataFailure = (payload) => ({
    type:POST_DATA_FAILURE,
    payload
})

export const postData = (payload) => (dispatch) => {
    dispatch(postDataReq())
    axios({
        method:'POST',
        url:"https://mock-server-anusha.herokuapp.com/user_data",
        data : {
            ...payload
        }
    })
    .then(res => {
        console.log(res)
        dispatch(postDataSuccess(res))
    })
    .catch(err => {
        console.log(err)
        dispatch(postDataFailure(err))
    })
}