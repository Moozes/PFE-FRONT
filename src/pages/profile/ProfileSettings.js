import { Container, Box } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"
import UploadAvatar from "../../components/UploadAvatar"
import LogoutAll from "../../components/LogoutAll"
import DeleteAccount from "../../components/DeleteAccount"
import DeleteAvatar from "../../components/DeleteAvatar"
import UpdateProfile from '../../components/UpdateProfile'
import VerifyEmailButton from "../../components/VerifyEmailButton"
import { useState, useEffect } from 'react'
import { getProfileInformation } from '../../utils/apiUser'

export default function ProfileSettings(props) {
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        console.log('useEffect')
        getProfileInformation()
        .then(res => {
            console.log(res)
            setUserInfo(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


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
                <ProfileCard userInfo={userInfo}/>
                {!emailVerified && (
                    <VerifyEmailButton/>
                )}
            </Box>

            <Box
                sx={{
                    display: "flex",
                }}
            >
                <UploadAvatar />
                <DeleteAvatar/>
            </Box>
            <LogoutAll/>
            {role !== "admin" && (
                <DeleteAccount/>
            )}
        </Container>
    )
}