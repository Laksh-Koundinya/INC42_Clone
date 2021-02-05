import React from 'react'
import {useSelector} from "react-redux"
import {Route,Redirect} from "react-router-dom"

export const PrivateRoutes = ({MyComponent, ...rest}) => {
    const isAuth = useSelector(state => state.login.isAuth)
    return (
        <div>
            {
                isAuth && <Route {...rest} render = { () => <MyComponent/>} />
            }
        </div>
    )
}
