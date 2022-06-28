
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {TextField, Button} from '@mui/material';



export default function UploadAvatar(props) {
    return (
        <Paper elevation={3} sx={{m: 1, p: 1}}>
        <Typography 
          variant="h6"
          align="center"
        >
          Upload Profile Image
        </Typography>
        <form>
          <TextField
            id="outlined-number"
            label="Profile Image"
            type="file"
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
    )
}