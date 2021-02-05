import { PROFILE_FAILURE, PROFILE_REQUEST, PROFILE_SUCCESS } from "./actionTypes";
import axios from "axios";


export  const profileRequest = () =>{
    return {
        type:PROFILE_REQUEST
    }
}

export const profileSuccess = (data) =>{
    return{
        type:PROFILE_SUCCESS,
        payload: data
    }

}


export const profileFailure = (message) =>{
    return{
        type : PROFILE_FAILURE,
        payload:message
    }
}

export const fetchUserDetails = (payload) => dispatch =>{
    dispatch( profileRequest() )
    const config = {
        method: "GET",
        url: `https://masai-api-mocker.herokuapp.com/user/${payload.username}`,
        data:payload.token,
        headers:{
            Authorization: `Bearer ${payload.token}` 
        }

    }

    axios(config)
     .then( res => dispatch( profileSuccess(res.data)))
     .catch( res => dispatch( profileFailure({"message":"error in getting profile details"})))
}