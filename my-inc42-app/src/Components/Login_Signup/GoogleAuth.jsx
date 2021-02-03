// 1021689394683-q1ksrnpr3o3mefu12oojoujc54cv5c1u.apps.googleusercontent.com

// XFRiSyXaO1IGgrZgqse-dMLP


import React from 'react';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from "react-router-dom";


const GoogleAuth = () => {
    const history = useHistory()

    const responseSuccess = (response) => {
        console.log(response)
        history.push("/")
     }

    const responseGoogle = (response) => {
    console.log(response);
    
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