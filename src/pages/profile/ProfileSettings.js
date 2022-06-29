import { Container, Box } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"
import UploadAvatar from "../../components/UploadAvatar"
import LogoutAll from "../../components/LogoutAll"
import DeleteAccount from "../../components/DeleteAccount"
import DeleteAvatar from "../../components/DeleteAvatar"
import UpdateProfile from '../../components/UpdateProfile'
import VerifyEmailButton from "../../components/VerifyEmailButton"

export default function ProfileSettings(props) {
    let role = "user"
    let emailVerified = false
    return (
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", gap:3}} >
            <UpdateProfile/>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <ProfileCard />
                {!emailVerified && (
                    <VerifyEmailButton/>
                )}
            </Box>

            <Box
                sx={{
                    display: "flex",
                }}
            >
                <UploadAvatar/>
                <DeleteAvatar/>
            </Box>
            <LogoutAll/>
            {role !== "admin" && (
                <DeleteAccount/>
            )}
        </Container>
    )
}