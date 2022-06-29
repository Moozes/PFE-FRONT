import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {TextField, Button} from '@mui/material';
import { uploadAvatar } from '../utils/apiUser';
import { useState } from 'react';


export default function UploadAvatar(props) {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    uploadAvatar(data)
    .then(res => {
      console.log(res)
      handleClickOpen()
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <>
      <Paper elevation={3} sx={{m: 1, p: 1 ,flexGrow:1}}>
      <Typography 
        variant="h6"
        align="center"
      >
        Upload Profile Image
      </Typography>
      <form onSubmit={handleSubmit} >
        <TextField
          id="outlined-number"
          label="Profile Image"
          type="file"
          name="avatar"
          required
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          sx={{
            mt:2,
            mb:2,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2px 0"
          }}
        >
          <Button 
            align="center"
            variant="contained"
            type="submit"
          >Upload</Button>
        </div>
      </form>
    </Paper>


    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Profile Image was  <Typography color="lightgreen" variant="button">successfully uploaded.</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}
        >OK</Button>
      </DialogActions>
    </Dialog>
    </>
  )
}