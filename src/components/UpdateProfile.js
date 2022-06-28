import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { TextField, Button } from '@mui/material';

const UpdateProfile = (props) => {
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
              <form  onSubmit={() => console.log("submitted")} >
                <TextField 
                  id="outlined-basic" 
                  label="Name" 
                  variant="outlined" 
                  type="text" 
                //   required
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
                  type="text" 
                //   required
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
                  type="text" 
                //   required
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
            </Paper>

    )
}

export default UpdateProfile