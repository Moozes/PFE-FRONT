import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { deleteMyAccount } from '../utils/apiAccountManegment';
import {
  useNavigate
} from 'react-router-dom'


export default function DeleteAccount(props) {
  let navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
      <Paper sx={{m: 1, p: 3}} variant="outlined" >
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
            handleClickOpen()
          }}
        >Delete My Account</Button>
      </div>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you really want to <Typography color="error" variant="button">DELETE</Typography> you account?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
            deleteMyAccount()
            .then(() => {
              sessionStorage.clear()
              navigate('/')
            })
            .catch(err => {
              console.log(err)
            })
          }}
        >Yes</Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>

    </Paper>
  )
}