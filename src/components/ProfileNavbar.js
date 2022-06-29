import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {
  Link
} from 'react-router-dom'

export default function ProdileNavbar(props) {


  return (
    <AppBar position="static"  >
    <Toolbar sx={{display: "flex", gap:2}} >
        <Button color="primary" variant="contained" sx={{flexGrow: 1}} component={Link} to="">lesions</Button>
        <Button color="primary" variant="contained" sx={{flexGrow: 1}} component={Link} to="settings">settings</Button>
    </Toolbar>
    </AppBar>
  )
}