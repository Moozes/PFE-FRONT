
export default function accessControl(page, navigate) {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    const role = sessionStorage.getItem("role")? sessionStorage.getItem("role") : ""
    if(!token)
        return navigate('/')
    if(page === "dashboard" && role !== "admin")
        return navigate('/')
    if(page === "forum" && role === "user")
        return navigate('/')
}