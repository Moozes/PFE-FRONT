import { Container } from "@mui/material"
import UploadLesion from "../../components/UploadLesion"
import LesionCard from "../../components/LesionCard"
export default function ProfileLesions(props) {
    return (
        <Container maxWidth="sm" sx={{pt: 2}} >
            <UploadLesion/>
            <LesionCard/>
            <LesionCard/>
            <LesionCard/>
            <LesionCard/>
        </Container>
    )
}