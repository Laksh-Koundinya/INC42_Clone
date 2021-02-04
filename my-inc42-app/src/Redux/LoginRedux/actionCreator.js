import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "./actionType"
import axios from "axios"


export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload
});

export const loginUserData = ({ email, password }) => (dispatch) => {
  dispatch(loginRequest());
  axios({
    method: "POST",
    url: "https://masai-api-mocker.herokuapp.com/auth/login",
    headers:{
      'Content-Type':"application/json"
    },
    data: {
      "username":email,
      "password":password
    }
  })
    .then((res) => {
      dispatch(loginSuccess({ token:res.data.token, username:email}));
      console.log(res);
    })
    .catch((err) => {
      dispatch(loginFailure({ err }));
    });
};


