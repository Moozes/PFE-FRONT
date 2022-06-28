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


export default function ProdileNavbar(props) {


  return (
    <AppBar position="static">
    <Toolbar sx={{display: "flex"}} >
        <Box sx={{flexGrow: 1}} >
            <Button color="inherit">lesions</Button>
            <Button color="inherit">settings</Button>
            
        </Box>
    </Toolbar>
    </AppBar>
  )
}