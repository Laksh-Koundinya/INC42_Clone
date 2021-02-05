// 1021689394683-q1ksrnpr3o3mefu12oojoujc54cv5c1u.apps.googleusercontent.com

// XFRiSyXaO1IGgrZgqse-dMLP


import React, { useRef } from 'react';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from "react-router-dom";


const GoogleAuth = ({setOpen,setGoogle}) => {

  const history = useHistory()
  const isAuth  = useRef()
    

    const responseGoogle = (response) => {
    console.log(response);
    
    }
    const responseSuccess = (response) => {
        console.log(response.Es.sd)
        history.push("/")
        setOpen(false)
        setGoogle(true)
     }

    return(
        <GoogleLogin
            clientId="1021689394683-q1ksrnpr3o3mefu12oojoujc54cv5c1u.apps.googleusercontent.com"
            onSuccess={responseSuccess}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            icon={true}
            buttonText="Google"
            theme="dark"
            longtitle={true}
        />
    );

}

export default GoogleAuth