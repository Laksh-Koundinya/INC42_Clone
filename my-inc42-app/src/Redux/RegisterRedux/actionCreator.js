import axios from "axios";
import {
  REGISTRATION_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS
} from "./actionType";

export const registrationReq = () => ({
  type: REGISTRATION_REQUEST
});

export const registrationSuccess = (payload) => ({
  type: REGISTRATION_SUCCESS,
  payload
});

export const registrationFailure = (payload) => ({
  type: REGISTRATION_FAILURE,
  payload
});

export const registrationUser = ({
  name,
  email,
  password,
  username,
  mobile,
  description
}) => (dispatch) => {
  dispatch(registrationReq());
  axios({
    method: "POST",
    url: "https://masai-api-mocker.herokuapp.com/auth/register",
    data: {
      name,
      email,
      password,
      username,
      mobile,
      description
    }
  })
    .then((res) => {
      console.log(res);
      dispatch(registrationSuccess({ res }));
    })
    .catch((err) => {
      console.log(err);
      registrationFailure({ err });
    });
};
