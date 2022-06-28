import DashboardNavbar from "../../components/DashboardNavbar"
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