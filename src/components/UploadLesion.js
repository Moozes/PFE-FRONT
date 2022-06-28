import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { TextField, Button } from '@mui/material';

const UploadLesion = (props) => {
    return (
        <Paper 
              elevation={3}
              sx={{
                p:1
              }}
            >
              <Typography 
                variant="h6"
                align="center"
              >
                Upload A lesion Image
              </Typography>
              <form  onSubmit={() => console.log("submitted")} >
                <TextField 
                  id="outlined-basic" 
                  label="Description" 
                  variant="outlined" 
                  type="text" 
                  required
                  placeholder='Enter Description' 
                  fullWidth
                  sx={{
                    mt:2,
                    mb:2
                  }}
                />
                <TextField
                  id="outlined-number"
                  label="Lesion Image"
                  type="file"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  >Upload</Button>
                </div>
              </form>
            </Paper>

    )
}

export default UploadLesion