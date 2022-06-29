import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link as MuiLink} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  Link,
  useNavigate
} from 'react-router-dom'
import { login } from '../utils/apiAccountManegment'
import saveToken from '../utils/saveToken'


export default function Login() {
  const [showErr, setShowErr] = React.useState(false)
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    login(email, password)
    .then(res => {
      console.log('Looged in')
      setShowErr(false)
      saveToken(res.data.token, res.data.user.role)
      navigate('/profile')
    })
    .catch(err => {
      console.log(err.response.data)
      setShowErr(true)
    })
  };



  return (
      <Container component="main" maxWidth="xs">

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
            Login
          </Typography>
          
          {showErr && (
            <Typography variant='body1' color="red" >
              Email or Password wrong!
            </Typography>
          )}

          {/* form */}
        <Box component="form" 
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
        >
            <TextField
              margin="normal"
              type="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink component={Link} to="../send-email" variant="body2">
                  Forgot password?
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink component={Link} to="../signup"  variant="body2">
                  {"Don't have an account? Sign Up"}
                </MuiLink>
              </Grid>
            </Grid>
          </Box>



        </Box>
      </Container>
  );
}



