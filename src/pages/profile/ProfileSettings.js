import { Container, Box } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"
import UploadAvatar from "../../components/UploadAvatar"
import LogoutAll from "../../components/LogoutAll"
import DeleteAccount from "../../components/DeleteAccount"
import DeleteAvatar from "../../components/DeleteAvatar"
import UpdateProfile from '../../components/UpdateProfile'

export default function ProfileSettings(props) {
    return (
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", gap:3}} >
            <UpdateProfile/>
            <ProfileCard doctor={false} />
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <UploadAvatar/>
                <DeleteAvatar/>
            </Box>
            <LogoutAll/>
            <DeleteAccount/>
        </Container>
    )
}