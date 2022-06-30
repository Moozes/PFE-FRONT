import { Container } from "@mui/material"
import ProfileCard from "../../components/ProfileCard"
import { useEffect, useState } from "react"
import { getAllDoctors } from '../../utils/apiUser'

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

    return (
        <Container maxWidth="sm">
            {doctors.map((d, idx) => (
                <ProfileCard key={idx} userInfo={d} doctor verifiedDoctor={d.verifiedDoctor}/>

            ))}

            {/* <ProfileCard doctor />
            <ProfileCard doctor verifiedDoctor/>
            <ProfileCard doctor verifiedDoctor/>
            <ProfileCard doctor /> */}
        </Container>
    )
}