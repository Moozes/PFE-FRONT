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

  let auth = true
  let role = "admin"
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display: "flex"}} >
          <Box sx={{flexGrow: 1}} >
              <Button color="inherit">Home</Button>
              {auth && (
              <>
                  {role==="admin" && (
                      <Button color="inherit">DashBoard</Button>
                  )}
                  <Button color="inherit">Profile</Button>
                  {(role==="admin" || role==="doctor") && (
                      <Button color="inherit">Forum</Button>
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
                      <Notification verifiedDoctor />
                    </MenuItem>
                    <MenuItem onClick={handleCloseDoctors}>
                      <Notification/>
                    </MenuItem>
                    <MenuItem onClick={handleCloseDoctors}>
                      <Notification verifiedDoctor />
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
                      <Notification/>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMessages}>
                      <Notification verifiedDoctor />
                    </MenuItem>
                  </Menu>
              </>
              )}
          </Box>
          {auth && (
              <Button color="error" variant="contained" >Logout</Button>
          )}
          {!auth && (
          <>
              <Button color="primary" variant="contained" sx={{ mr:1 }} >Login</Button>
              <Button color="primary" variant="contained">Signup</Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}