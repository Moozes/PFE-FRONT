import { Container } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"

export default function Doctors(props) {
    return (
        <Container maxWidth="sm">
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
        </Container>
    )
}