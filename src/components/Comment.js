import { Paper, Avatar, Box, Typography } from "@mui/material";
import theme from "../theme";

export default function Comment(props) {
    return(
        <Paper elevation={6} sx={{display: "flex", p:2, m:2}}>
            <Avatar src="/profile.jpg" sx={{mr:2}}/>
            <Box>
                <Typography variant="h6">Samia Hamdani</Typography>
                <Typography variant="body1" sx={{color: theme.palette.grey[400]}} >this is a rare casethis is a rare casethis is a rare casethis is a rare casethis is a rare casethis is a rare casethis is a rare casethis is a rare casethis is a rare casethis is a rare casethis is a rare case</Typography>
            </Box>
        </Paper>
    )
}