import { Container } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"

export default function AllUsers(props) {
    return (
        <Container maxWidth="sm">
            <ProfileCard user/>
            <ProfileCard user/>
            <ProfileCard user/>
            <ProfileCard user/>
            <ProfileCard user/>
        </Container>
    )
}