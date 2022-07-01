import { Container, Typography, Button, Divider } from "@mui/material"
import UploadLesion from "../../components/UploadLesion"
import LesionCard from "../../components/LesionCard"
import { getLesions, deleteLesion, updatePublishLesion } from "../../utils/apiLesion"
import { useState, useEffect } from "react"
import { comment } from "../../utils/apiLesion"
import { getProfileInformation } from '../../utils/apiUser'


export default function ProfileLesions(props) {
    const [lesions, setLesions] = useState([])
    // const [me, setMe] = useState({})
    useEffect(() => {
        getLesions()
        .then(res => {
            console.log(res)
            setLesions(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        // getProfileInformation()
        // .then(res => {
        //     console.log(res)
        //     setMe(res.data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }, [])

    const handleDeleteLesion = (id) => {
        deleteLesion(id)
        .then(res => {
            const newLesions = lesions.filter(l => l._id !== id)
            setLesions(newLesions)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleUpdatePublishLesion = (id, published) => {
        updatePublishLesion(id, published)
        .then(res => {
            const newLesions = lesions.map(l => {
                if(l._id === id)
                    l.published = !l.published
                return l
            })
            setLesions(newLesions)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleComment = (id, text) => {
        comment(id, text)
        .then(res => {
            console.log(res)
            const newLesions = lesions.map(l => {
                if(l._id === id)
                    return res.data
                return l
            })
            setLesions(newLesions)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <Container maxWidth="sm" sx={{pt: 2}} >
            <UploadLesion lesions={lesions} setLesions={setLesions} />
            <Divider
                sx={{mt:4}}
            >YOUR PREVIOUSLY UPLOADED LESIONS</Divider>
            {lesions.length === 0 && (
                <Typography 
                    align="center"
                    sx={{mt:4, mb:4}}
                >You haven't uploaded any lesion yet.</Typography>
            )}
            {lesions.map((l, idx)  => (
                <LesionCard 
                    key={idx} 
                    lesion={l} 
                    published={l.published} 
                    profile
                    handleDeleteLesion={() => handleDeleteLesion(l._id)}
                    handleUpdatePublishLesion={() => handleUpdatePublishLesion(l._id, !l.published)}
                    handleComment={handleComment}
                />
            ))}
        </Container>
    )
}