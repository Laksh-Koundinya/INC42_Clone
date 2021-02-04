import { PROFILE_FAILURE, PROFILE_REQUEST, PROFILE_SUCCESS } from "./actionTypes"


let initState ={
    loading: null,
    profileData: {},
    error:null,
    message:""

}

export const profileReducer = (state=initState, { type, payload }) =>{
       console.log(payload, "profi pay",type)

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