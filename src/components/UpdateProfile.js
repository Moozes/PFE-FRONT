import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { TextField, Button } from '@mui/material';
import { updateProfile } from '../utils/apiUser';
import { useState } from 'react';
const UpdateProfile = (props) => {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    const formdata = new FormData(event.currentTarget)
    const body = {}
    const name = formdata.get('name') 
    const email = formdata.get('email')
    const password = formdata.get('password')
    name && (body.name = name)
    email && (body.email = email)
    password && (body.password= password)
    updateProfile(body)
    .then(res => {
      console.log(res)
      setMsg('Profile Info was  SUCCESSFULLY UPDATED.')
      handleClickOpen()
    })
    .catch(err => {
      setMsg(err.response.data.message || err.response.data.errmsg)
      handleClickOpen()
      console.log(err)
    })
  }

    return (
        <Paper 
              elevation={3}
              sx={{
                p:1, 
                mt:3
              }}
            >
              <Typography 
                variant="h6"
                align="center"
              >
                Update Profile Info
              </Typography>
              <form  onSubmit={handleSubmit} >
                <TextField 
                  id="outlined-basic" 
                  label="Name" 
                  variant="outlined" 
                  type="text" 
                //   required
                  name="name"
                  placeholder='Enter Description' 
                  fullWidth
                  sx={{
                    mt:2,
                    mb:2
                  }}
                />
                <TextField 
                  id="outlined-basic" 
                  label="Email" 
                  variant="outlined" 
                  type="email" 
                //   required
                  name="email"
                  placeholder='Enter Description' 
                  fullWidth
                  sx={{
                    mt:2,
                    mb:2
                  }}
                />
                <TextField 
                  id="outlined-basic" 
                  label="Password" 
                  variant="outlined" 
                  type="password" 
                //   required
                  name="password"
                  placeholder='Enter Description' 
                  fullWidth
                  sx={{
                    mt:2,
                    mb:2
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
                  >Update</Button>
                </div>
              </form>


              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {/* Profile Info was  <Typography color="lightgreen" variant="button">successfully updated.</Typography> */}
                  {msg}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}
                >OK</Button>
              </DialogActions>
            </Dialog>


            </Paper>

    )
}

export default UpdateProfile