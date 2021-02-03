import {
    REGISTRATION_FAILURE,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS
  } from "./actionType";
  
  export const initState = {
    isRegister: false,
    isLoading: false,
    isError: false
  };
  const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case REGISTRATION_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case REGISTRATION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isRegister: true
        };
  
      case REGISTRATION_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  