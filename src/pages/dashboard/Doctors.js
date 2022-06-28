import { Container } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"

export default function Doctors(props) {
    return (
        <Container maxWidth="sm">
            <ProfileCard doctor verifiedDoctor/>
            <ProfileCard doctor />
            <ProfileCard doctor verifiedDoctor/>
            <ProfileCard doctor verifiedDoctor/>
            <ProfileCard doctor />
        </Container>
    )
}