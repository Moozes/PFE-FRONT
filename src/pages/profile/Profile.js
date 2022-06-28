import ProfileNavbar from '../../components/ProfileNavbar'
import ProfileLesions from './ProfileLesions'
import ProfileSettings from './ProfileSettings'
export default function Profile(props) {
    return (
        <>
            <ProfileNavbar/>
            <ProfileSettings/>

            {/* <ProfileLesions/> */}


            {/* the router Outlet */}
            {/* <Outlet/> */}
        </>
    )
}