
import { Paper, Box, Container, Typography } from "@mui/material"
import SingleMessage from "../components/SingleMessage"
import MessageForm from "../components/MessageForm"

export default function Messaging(props) {

    return(
        <Container maxWidth="sm" sx={{pt: 3, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h6" align="center" gutterBottom>
                Messaging With Name??
            </Typography>
            <Paper elevation={3} sx={{
                width: 400, 
                p:2,
                height: 400,
                overflow: "scroll",
                mb:2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                
            }}>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
                <SingleMessage/>
            </Paper>

              <MessageForm/>
        </Container>
    )
}