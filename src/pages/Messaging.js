
import { Paper, Box, Container, Typography } from "@mui/material"
import SingleMessage from "../components/SingleMessage"
import MessageForm from "../components/MessageForm"
import {
    useParams,
    useNavigate
} from 'react-router-dom'
import {
    useEffect,
    useState
} from 'react'
import accessControl from "../utils/accessControl"
import { getMessages, sendMessage } from "../utils/apiMessage"

export default function Messaging(props) {
    let navigate = useNavigate()
    let params = useParams()
    let reciever_id = params.id
    const [messages, setMessages] = useState([])
    useEffect(() => {
        accessControl("messaging", navigate)

        getMessages(reciever_id)
        .then(res => {
            console.log(res)
            setMessages(res.data)
        })
        .catch(err => {
            console.log(err)
        })

        const myInterval = setInterval(
            function() {
                getMessages(reciever_id)
                .then(res => {
                    console.log(res)
                    setMessages(res.data)
                })
                .catch(err => {
                    console.log(err)
                })    
            }
        , 2000)
        return () => {
            console.log('clear interval')
            clearInterval(myInterval)
        }
    }, [params.id])

    const handleSendMessage = (text) => {
        sendMessage(reciever_id, text)
        .then(res => {
            console.log(res)
            const newMessages = [res.data, ...messages]
            setMessages(newMessages)
        })
        .catch(err => {
            console.log(err)
        })
    }

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

                {messages.map((m, idx) => (
                    <SingleMessage message={m} key={idx} myMessage={reciever_id === m.receiver._id} />
                ))}

            </Paper>

              <MessageForm
                handleSendMessage={handleSendMessage}
              />
        </Container>
    )
}