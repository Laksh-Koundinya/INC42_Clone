import React , {useEffect} from 'react'
import {useSelector} from "react-redux"
import { fetchUserDetails } from '../../Redux/profile/actionCreators'

export const UserAccount = () => {

    const profileData = useSelector(state => state.profile.profileData)

    useEffect(() => {
        fetchUserDetails()
        
    }, [])

    console.log(profileData)
    return (
        <div>
            
        </div>
    )
}
