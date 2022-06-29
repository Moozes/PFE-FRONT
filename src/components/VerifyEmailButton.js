import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {
    useNavigate
} from 'react-router-dom'


export default function VerifyEmailButton(props) {
    let navigate = useNavigate()

    return (
        <Paper elevation={3} sx={{m: 1, p: 3, flexGrow:1}}  >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2px 0"
          }}
        >
          <Typography align="center" variant='body1' gutterBottom>
            Email Verification
          </Typography>
          <Button 
            align="center"
            variant="contained"
            color="primary"
            onClick={() => {
                navigate('/verify-email')
            }}
          >Verify My Email</Button>
        </div>
      </Paper>
    )
}