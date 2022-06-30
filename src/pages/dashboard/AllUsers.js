import { Container, Typography } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"
import { getAllUsers, deleteUser } from "../../utils/apiAdmin"
import { useState, useEffect } from "react"

export default function AllUsers(props) {
    const [users, setUsers] = useState([]) 

    useEffect(() => {
        getAllUsers()
        .then(res => {
            console.log(res)
            const fetchedUsersWithoutAdmin = res.data.filter(u => u.role !== "admin")
            setUsers(fetchedUsersWithoutAdmin)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleDeleteUser = (id) => {
        deleteUser(id)
        .then(res => {
            console.log(res)
            const newUsers = users.filter(u => u._id !== id)
            setUsers(newUsers)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Container maxWidth="sm">
            {users.length === 0 && (
                <Typography 
                    variant="h6" 
                    color="info" 
                    align="center"
                    mt={4}
                >
                    There are no users registered yet!
                </Typography>
            )}
            {users.map((u, idx) => (
                <ProfileCard 
                    key={idx} 
                    userInfo={u} 
                    user
                    handleDeleteUser={() => handleDeleteUser(u._id)}
                />
            ))}
        </Container>
    )
}