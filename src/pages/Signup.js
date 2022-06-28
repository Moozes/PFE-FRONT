import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Select, MenuItem, FormControl, InputLabel} from '@mui/material';


export default function SignUp() {
  const [showErr, setShowErr] = React.useState(false)

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // console.log({
//     //   email: data.get('role'),
//     //   password: data.get('password'),
//     // });
//     const name = data.get('name')
//     const role = data.get('role')
//     const email = data.get('email')
//     const password = data.get('password')
//     signup(name, role, email, password)
//     .then(res => {
//       console.log(res)
//       saveToken(res.data.token, res.data.user.role)
//       setShowErr(false)
//       navigate('/profile')
//     })
//     .catch(err => {
//       setShowErr(true)
//       console.log(err.response.data.error)
//     })
//   };



  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />


        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Signup
          </Typography>

          {showErr && (
            <Typography variant='body1' color="red" >
              Something went wrong, try again!
            </Typography>
          )}

          {/* form */}
          <Box component="form" 
        //   onSubmit={handleSubmit}
           sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                name="role"
              >
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

