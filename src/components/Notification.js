import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material';
import theme from '../theme';
import { SERVER_NO_SLASH } from '../utils/apiUrl';


export default function Notification(props) {
    let verifiedDoctor= props.verifiedDoctor
    let {user} = props
    let avatarUrl = user.avatarUrl ? SERVER_NO_SLASH+user.avatarUrl : '/profile.jpg'
    return (
        <Paper sx={{display: "flex", alignItems: "center", p:1, cursor: "pointer"}} elevation={3} onClick={props.onClick}>
            <Avatar src={avatarUrl} sx={{mr:1, width: 24, height: 24}}   />
            <Typography variant="h6" component="div">
                {user.role === "doctor" && "Dr"} {user.name}
            </Typography>
              {user.role === "doctor" && (
                <>
                {bull}
                <span style={{ color: verifiedDoctor ? theme.palette.success.light: theme.palette.error.light }}>
                    {verifiedDoctor ? 'verified' : 'not verified'}
                </span>
                </>
              )}
        </Paper>
    )
}


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
