import { GOOGLE_PROFILE_SUCCESS, PROFILE_FAILURE, PROFILE_REQUEST, PROFILE_SUCCESS } from "./actionTypes"


let initState ={
    loading: null,
    profileData: {user:[]},
    error:null,
    message:"",
    googleAuth:false

}

export const profileReducer = (state=initState, { type, payload }) =>{

        switch(type){
            case PROFILE_REQUEST:{
                return{
                    ...state,
                    loading:true
                }
            }

            case PROFILE_SUCCESS:{
                return{
                    ...state,
                    loading:false,
                    error: false,
                    profileData:payload,
                    message:"getting the profile details success"
                }
            }

            case PROFILE_FAILURE:{
                return{
                    ...state,
                    error: true,
                    loading: false,
                    message:payload.message
                }
            }

           
            default:
                return state;
        }
    
}