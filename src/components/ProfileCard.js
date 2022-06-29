import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from '../theme'


export default function ProfileCard(props) {
    let doctor = props.doctor
    let user = props.user
    let verifiedDoctor = props.verifiedDoctor
  return (
    <Card sx={{ minWidth: "60%", m:1, display: "flex", flexGrow:1}}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/profile.jpg"
      />
      <CardContent sx={{flexGrow: 1}}>
        <Typography variant="h5" component="div">
            {doctor && "Dr "}
            Moussa
            {doctor && (
                <>
                    {bull}
                    <span style={{ color: verifiedDoctor ? theme.palette.success.light: theme.palette.error.light }}>
                        {verifiedDoctor ? 'verified' : 'not verified'}
                    </span>
                </>
            )}
        </Typography>
        <Typography sx={{}} color="text.secondary">
          @yahoo.com
        </Typography>
        <Typography sx={{}} color="text.secondary">
          date
        </Typography>
      </CardContent>
      <CardActions>
        {doctor && (
            <Button size="medium"  variant="contained" color={verifiedDoctor ? "error" : "success"} >
                {verifiedDoctor ? 'Unverify': 'Verify'}
            </Button>
        )}
        {user && (
            <Button size="medium" color="error" variant="contained" >
                delete
            </Button>
        )}
      </CardActions>
    </Card>
  );
}


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
