import { 
    Container,
    Grid,
    Typography
 } from "@mui/material"
 import DatasetCard from "../../components/DatasetCard"
import { useEffect, useState } from "react"
import { getAllLesions } from "../../utils/apiAdmin"

export default function Dataset(props) {
    const [allLesions, setAllLesions] = useState([])

    useEffect(() => {
        getAllLesions()
        .then(res => {
            console.log(res)
            setAllLesions(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <>
            <Container maxWidth='md'>
                <Grid container  spacing={2}>
                    {allLesions.map((l, idx) => (
                        <Grid key={idx} item xs={4}>
                            <DatasetCard lesion={l}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}