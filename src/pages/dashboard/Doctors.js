import { Container, Typography } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"
import { useEffect, useState } from "react"
import { getAllDoctors } from '../../utils/apiUser'
import { verifyDoctor } from "../../utils/apiAdmin"
export default function Doctors(props) {
    // TODO: when verifying a doctor update the state because useEffect only fetches once
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        getAllDoctors()
        .then(res => {
          console.log(res)
          setDoctors(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    const handleVerifyDoctor = (id) => {
        verifyDoctor(id)
        .then(res => {
            const newDoctors = doctors.map(d => {
                if(d._id === id)
                    d.verifiedDoctor = !d.verifiedDoctor
                return d
            })
            setDoctors(newDoctors)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Container maxWidth="sm">
            {doctors.length === 0 && (
                <Typography 
                    variant="h6" 
                    color="info" 
                    align="center"
                    mt={4}
                >
                    There are no doctors registered yet!
                </Typography>
            )}
            {doctors.map((d, idx) => (
                <ProfileCard 
                key={idx} 
                userInfo={d} 
                doctor 
                verifiedDoctor={d.verifiedDoctor}
                handleVerifyDoctor={() => handleVerifyDoctor(d._id)}
            />
            ))}
        </Container>
    )
}