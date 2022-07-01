import { Container } from "@mui/material"
import UploadLesion from "../../components/UploadLesion"
import LesionCard from "../../components/LesionCard"
import { getLesions } from "../../utils/apiLesion"
import { useState, useEffect } from "react"
export default function ProfileLesions(props) {
    const [lesions, setLesions] = useState([])

    useEffect(() => {
        getLesions()
        .then(res => {
            console.log(res)
            setLesions(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleDeleteLesion = (id) => {
        
    }

    return (
        <Container maxWidth="sm" sx={{pt: 2}} >
            <UploadLesion lesions={lesions} setLesions={setLesions} />
            {lesions.map((l, idx)  => (
                <LesionCard key={idx} lesion={l} published={l.published} profile/>
            ))}
        </Container>
    )
}