import { Paper, Avatar, Box, Typography } from "@mui/material";
import theme from "../theme";
import { SERVER_NO_SLASH } from "../utils/apiUrl";

export default function Comment(props) {
    const { comment } = props
    const avatarUrl = comment.user.avatarUrl ? SERVER_NO_SLASH+comment.user.avatarUrl : '/profile.jpg'
    return(
        <Paper elevation={6} sx={{display: "flex", p:2, m:2}}>
            <Avatar src={avatarUrl} sx={{mr:2}}/>
            <Box>
                <Typography variant="h6">{comment.user.name}</Typography>
                <Typography variant="body1" sx={{color: theme.palette.grey[400]}} >{comment.text}</Typography>
            </Box>
        </Paper>
    )
}