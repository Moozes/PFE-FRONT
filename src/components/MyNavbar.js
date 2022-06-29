import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Notification from './Notification';
import {
  Link,
  useNavigate
} from 'react-router-dom'
import { logout } from '../utils/apiAccountManegment'
import saveToken from '../utils/saveToken'


export default function MyNavbar(props) {
  const [anchorElMessages, setAnchorElMessages] = React.useState(null);
  const openMessages = Boolean(anchorElMessages);
  const handleClickMessages = (event) => {
    setAnchorElMessages(event.currentTarget);
  };
  const handleCloseMessages = () => {
    setAnchorElMessages(null);
  };


  const [anchorElDoctors, setAnchorElDoctors] = React.useState(null);
  const openDoctors = Boolean(anchorElDoctors);
  const handleClickDoctors = (event) => {
    setAnchorElDoctors(event.currentTarget);
  };
  const handleCloseDoctors = () => {
    setAnchorElDoctors(null);
  };

  const handleLogout = () => {
    logout()
    .then(res => {
      console.log(res)
      sessionStorage.clear()
      navigate('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  let auth = true
  let role = "admin"
  let navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display: "flex"}} >
          <Box sx={{flexGrow: 1}} >
              <Button color="inherit" component={Link} to="/">Home</Button>
              {auth && (
              <>
                  {role==="admin" && (
                      <Button color="inherit" component={Link} to="dashboard">DashBoard</Button>
                  )}
                  <Button color="inherit" component={Link} to="profile">Profile</Button>
                  {(role==="admin" || role==="doctor") && (
                      <Button color="inherit" component={Link} to="forum">Forum</Button>
                  )}

                  <Button color="inherit" onClick={handleClickDoctors}>Doctors</Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElDoctors}
                    open={openDoctors}
                    onClose={handleCloseDoctors}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleCloseDoctors}>
                      <Notification 
                        verifiedDoctor 
                        onClick={() => {
                          navigate('messages/123')
                        }}
                      />
                    </MenuItem>
                  </Menu>


                  <Button color="inherit" onClick={handleClickMessages}>Messages</Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElMessages}
                    open={openMessages}
                    onClose={handleCloseMessages}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleCloseMessages}>
                      <Notification 
                          verifiedDoctor 
                          onClick={() => {
                            navigate('messages/123')
                          }}
                      />
                    </MenuItem>
                  </Menu>
              </>
              )}
          </Box>
          {auth && (
              <Button color="error" variant="contained" onClick={handleLogout}>Logout</Button>
          )}
          {!auth && (
          <>
              <Button color="primary" variant="contained" sx={{ mr:1 }} component={Link} to="login">Login</Button>
              <Button color="primary" variant="contained" component={Link} to="signup">Signup</Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}