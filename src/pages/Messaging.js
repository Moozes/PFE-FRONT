
import { Paper, Box, Container, Typography } from "@mui/material"
import SingleMessage from "../components/SingleMessage"
import MessageForm from "../components/MessageForm"
import {
    useParams,
    useNavigate
} from 'react-router-dom'
import {
    useEffect
} from 'react'
import accessControl from "../utils/accessControl"

export default function Messaging(props) {
    let navigate = useNavigate()
    let params = useParams()
    useEffect(() => {
        accessControl("messaging", navigate)
    }, [])
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