import LesionCard from "../components/LesionCard";
import { Box, Container, Typography, Paper } from "@mui/material";
import {
    useNavigate
} from 'react-router-dom'
import {
    useEffect,
    useState
} from 'react'
import { getPublishedLesions, comment } from "../utils/apiLesion";
import accessControl from "../utils/accessControl"


export default function Forum(props) {
    const role = sessionStorage.getItem("role")? sessionStorage.getItem("role") : ""

    const [publishedLesions, setPublishedLesions] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        accessControl("forum", navigate)
        
        getPublishedLesions()
        .then(res => {
            console.log(res)
            setPublishedLesions(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    const handleComment = (id, text) => {
        comment(id, text)
        .then(res => {
            console.log(res)
            const newLesions = publishedLesions.map(l => {
                if(l._id === id)
                    return res.data
                return l
            })
            setPublishedLesions(newLesions)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Container maxWidth="sm">
            {publishedLesions.length === 0 && (
                <>
                    <Typography
                        align="center"
                        sx={{mt:4, mb: 4}}
                        variant="h6"
                    >There are no published lesions</Typography>
                    {role === "doctor" && (
                        <Paper 
                            elevation={3}
                            sx={{p:4, color: "orange"}}
                        >
                            <Typography align="center" variant="body1" >DOCTOR ACCOUNT VERIFICATION !!</Typography>
                            You need to verify your account by sending your credentials to the admin via e-mail: <a href = "mailto: khodja.moussa@yahoo.com" style={{color: "white"}}>khodja.moussa@yahoo.com</a>
                        </Paper>
                    )}
                </>
            )}
            {publishedLesions.map((l, idx) => (
                <LesionCard
                    key={idx}
                    lesion={l}
                    handleComment={handleComment}
                />
            ))}
           
        </Container>
    )
}