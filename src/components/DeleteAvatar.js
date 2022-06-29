import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { deleteAvatar } from '../utils/apiUser';
import { useState } from 'react';
export default function DeleteAvatar(props) {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false)
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
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
                handleClickOpen()
            }}
          >Delete My Image</Button>
        </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you really want to <Typography color="error" variant="button">DELETE</Typography> your Profile Image?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
              deleteAvatar()
              .then((res) => {
                console.log(res)
                handleClickOpen2()
                handleClose()
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



      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your profile image was deleted successfully.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose2} autoFocus>
          OK
        </Button>
      </DialogActions>
      </Dialog>

      </Paper>
    )
}