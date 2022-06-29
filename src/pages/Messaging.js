
import { Paper, Box, Container, Typography } from "@mui/material"
import SingleMessage from "../components/SingleMessage"
import MessageForm from "../components/MessageForm"
import {
    useParams
} from 'react-router-dom'

export default function Messaging(props) {
    let params = useParams()
    return(
        <Container maxWidth="sm" sx={{pt: 3, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h6" align="center" gutterBottom>
                Messages with Name?? with id {params.id}
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
                <SingleMessage myMessage/>
                <SingleMessage/>
                <SingleMessage myMessage/>
                <SingleMessage/>
                <SingleMessage myMessage/>
                <SingleMessage/>
            </Paper>

              <MessageForm/>
        </Container>
    )
}