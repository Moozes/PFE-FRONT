import ProfileNavbar from '../../components/ProfileNavbar'
import {
    Outlet
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import accessControl from '../../utils/accessControl'
import {
    useNavigate
} from 'react-router-dom'

export default function Profile(props) {
    let navigate = useNavigate()
    useEffect(() => {
        accessControl("profile", navigate)
    }, [])
    return (
        <>
            <ProfileNavbar/>
            <Outlet/>
        </>
    )
}