import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function DeleteAccount(props) {
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
          <Typography align="center" variant='body1' color="red" gutterBottom>
            Dangerous
          </Typography>
          <Button 
            align="center"
            variant="contained"
            color="error"
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
          >Delete My Account</Button>
        </div>
      </Paper>
    )
}