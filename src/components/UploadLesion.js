import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { uploadLesion } from '../utils/apiLesion';

const UploadLesion = (props) => {
  const [showErr, setShowErr] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // const description = data.get('description')
    // const image = data.get('image')
    // console.log(description)
    // console.log(image)
    uploadLesion(data)
    .then(res => {
      console.log(res)
      const newLesions = [res.data, ...props.lesions]
      props.setLesions(newLesions)
      setShowErr(false)
    })
    .catch(err => {
      console.log(err)
      setShowErr(true)
    })

  };


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

              {showErr && (
                <Typography variant='body1' color="red" >
                  Email or Password wrong!
                </Typography>
              )}

              <form  onSubmit={handleSubmit} >
                <TextField 
                  id="outlined-basic" 
                  label="Description" 
                  variant="outlined" 
                  type="text" 
                  required
                  placeholder='Enter Description' 
                  fullWidth
                  name="description"
                  sx={{
                    mt:2,
                    mb:2
                  }}
                />
                <TextField
                  id="outlined-number"
                  label="Lesion Image"
                  type="file"
                  name="image"
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