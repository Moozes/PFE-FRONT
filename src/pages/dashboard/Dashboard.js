import DashboardNavbar from "../../components/DashboardNavbar"
import {
    Outlet,
    useNavigate
} from 'react-router-dom'
import {
    useEffect
} from 'react'
import accessControl from "../../utils/accessControl"

export default function Dashboard(props) {
    let navigate = useNavigate()
    useEffect(() => {
        accessControl("dashboard", navigate)
    }, [])
    return (
        <>
        <DashboardNavbar/>
        <Outlet/>
        </>
    )
}