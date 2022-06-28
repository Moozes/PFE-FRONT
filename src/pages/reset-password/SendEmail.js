import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function SendEmail() {
  const [showErr, setShowErr] = React.useState(false)


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // console.log({
  //   //   email: data.get('role'),
  //   //   password: data.get('password'),
  //   // });
  //   const email = data.get('email')
  //   sendResetCode(email)
  //   .then(res => {
  //     console.log(res)
  //     setShowErr(false)
  //     navigate('/reset-password')
  //   })
  //   .catch(err => {
  //     setShowErr(true)
  //     console.log(err.response.data.error)
  //   })
  // };



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
            Email
          </Typography>

          {showErr && (
            <Typography variant='body1' color="red" >
              Email not found!
            </Typography>
          )}

          {/* form */}
          <Box component="form" 
            // onSubmit={handleSubmit}
             sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            
          </Box>
        </Box>
      </Container>
  );
}

