import LesionCard from "../components/LesionCard";
import { Box, Container } from "@mui/material";

export default function Forum(props) {
    return (
        <Container maxWidth="sm">
            <LesionCard/>
            <LesionCard/>
            <LesionCard/>
        </Container>
    )
}