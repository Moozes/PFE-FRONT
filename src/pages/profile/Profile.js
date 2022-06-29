import ProfileNavbar from '../../components/ProfileNavbar'
import {
    Outlet
} from 'react-router-dom'

export default function Profile(props) {
    return (
        <>
            <ProfileNavbar/>
            <Outlet/>
        </>
    )
}