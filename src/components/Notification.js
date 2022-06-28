import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material';
import theme from '../theme';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function Notification(props) {
    let verifiedDoctor=true
    return (
        <Paper sx={{display: "flex", alignItems: "center", p:1, cursor: "pointer"}} elevation={3}>
            <Avatar src="/profile.jpg" sx={{mr:1, width: 24, height: 24}}   />
            <Typography variant="h6" component="div">
                Dr Omar{bull}
            </Typography>
            <span style={{ color: verifiedDoctor ? theme.palette.success.light: theme.palette.error.light }}>
                {verifiedDoctor ? 'verified' : 'not verified'}
            </span>
        </Paper>
    )
}