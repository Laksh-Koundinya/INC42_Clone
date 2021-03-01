import React, { useRef } from 'react';
import {GoogleLogin} from 'react-google-login';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { googleUserSuccess } from '../../Redux/LoginRedux/actionCreator';
import { getGoogleDetails } from '../../Redux/profile/actionCreators';

const GoogleAuth = ({setOpen,setGoogle,profile}) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const isAuth  = useRef()
    

    const responseGoogle = (response) => {
        console.log(response);
    }
    const responseSuccess = (response) => {
        console.log(response.profileObj)
        history.push("/")
        setOpen(false)
        setGoogle(true)
        
        profile.push(response.profileObj)
        dispatch( googleUserSuccess())
     }

    return(
        <GoogleLogin
            clientId = '1021689394683-qaqjelukt8h370rak6nb9tdu51069ts7.apps.googleusercontent.com'
            onSuccess={responseSuccess}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            icon={true}
            buttonText="Google"
            theme="dark"
            longtitle={true}
            // style={{marginTop:"100px"}}
        />
    );

}

export default GoogleAuth
