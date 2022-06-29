import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import theme from '../theme';
import {
  useNavigate
} from 'react-router-dom'
import { logoutAll } from '../utils/apiAccountManegment'
import saveToken from '../utils/saveToken'


export default function LogoutAll(props) {
  let navigate = useNavigate()
  const handleLogoutAll = () => {
    logoutAll()
    .then(res => {
      console.log(res)
      sessionStorage.clear()
      navigate('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
      <Paper elevation={3} sx={{m: 1, p: 3}} variant="outlined">
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
          onClick={handleLogoutAll}
        >Logout All</Button>
      </div>
    </Paper>
  )
}