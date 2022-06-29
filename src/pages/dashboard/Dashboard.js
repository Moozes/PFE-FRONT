import DashboardNavbar from "../../components/DashboardNavbar"
import {
    Outlet
} from 'react-router-dom'

export default function Dashboard(props) {
    return (
        <>
        <DashboardNavbar/>
        <Outlet/>
        {/* <Doctors/> */}

        {/* <AllUsers/> */}

        {/* router outlet */}
        {/* <Outlet/> */}
        </>
    )
}