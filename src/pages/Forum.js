import LesionCard from "../components/LesionCard";
import { Box, Container } from "@mui/material";
import {
    useNavigate
} from 'react-router-dom'
import {
    useEffect
} from 'react'
import accessControl from "../utils/accessControl"


export default function Forum(props) {
    let navigate = useNavigate()
    useEffect(() => {
        accessControl("forum", navigate)
    }, [])
    return (
        <Container maxWidth="sm">
            <LesionCard/>
            <LesionCard/>
            <LesionCard/>
        </Container>
    )
}