import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function DeleteAvatar(props) {
    return (
        <Paper elevation={3} sx={{m: 1, p: 3, flexGrow:1}} variant="outlined">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2px 0"
          }}
        >
          <Typography align="center" variant='body1' color="red" gutterBottom>
            Delete Profile Image
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
          >Delete My Image</Button>
        </div>
      </Paper>
    )
}