import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import theme from '../theme';


export default function LogoutAll(props) {
    return (
        <Paper elevation={3} sx={{m: 1, p: 1}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2px 0"
          }}
        >
          <Typography align="center" variant='body1' sx={{color: theme.palette.info.main}} gutterBottom>
            Logout of all connected devices
          </Typography>
          <Button 
            align="center"
            variant="contained"
            color="info"
            onClick={() => {
            //   deleteMyAccount()
            //   .then(() => {
            //     sessionStorage.clear()
            //     navigate('/')
            //   })
            //   .catch(err => {
            //     console.log(err)
            //   })
            }}
          >Logout All</Button>
        </div>
      </Paper>
    )
}