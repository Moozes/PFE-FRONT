import ProfileNavbar from '../../components/ProfileNavbar'
import {
    Outlet
} from 'react-router-dom'
import { useState, useEffect } from 'react'
export default function Profile(props) {

    return (
        <>
            <ProfileNavbar/>
            <Outlet/>
        </>
    )
}