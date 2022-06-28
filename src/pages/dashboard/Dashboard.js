import { Container } from "@mui/material"
import DashboardNavbar from "../../components/DashboardNavbar"
import ProfileCard from "../../components/ProfileCard"
import AllUsers from "./AllUsers"
import Doctors from "./Doctors"

export default function Dashboard(props) {
    return (
        <>
        <DashboardNavbar/>
        <Doctors/>

        {/* <AllUsers/> */}

        {/* router outlet */}
        {/* <Outlet/> */}
        </>
    )
}