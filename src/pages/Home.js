import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, Divider, Container } from '@mui/material';

export default function Home(props) {

  return (
    <>
        <Paper
        square
        sx={{
            position: 'relative',
            height: 400,
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(/hero2.webp)`,
        }}
        >
        {/* Increase the priority of the hero background image */}
        {/* {<img style={{ display: 'none' }} src="/hero.jpg"/>} */}
        <Box
            sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
            }}
        />
            <Box
                sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                // pr: { md: 0 },
                }}
            >
                <Typography component="h1" variant="h2" align="center" color="inherit" sx={{mb: 5}}>
                Online Melanoma Skin Cancer Detection
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Button variant="contained"  component={Link} to="signup" align="center" size='large' href="#">
                    Register Now
                    </Button>
                </Box>
            </Box>
        </Paper>

        <Container maxWidth="md">

        

        <Paper 
            elevation={0}
            sx={{
                p: 2,
                mb: 4
            }}
        >
            <Typography
                variant="button"
                component="h1"
                align="center"
                sx={{
                    fontSize: "20px",
                    mb: 2,
                    color: 'primary.main'
                }}
            >
                <Divider>
                About Project
                </Divider>
            
            </Typography>
            <Typography
                // align="center"
                // variant="button"
                component="div"
                sx={{
                    fontSize: "18px",
                    fontWeight: 400
                }}
            >The idea of this project is as follows: We wanted to come up with an easy way to check whether you have melanoma or not, without the need to go to a doctor, or you can use it as a second confirmation before or after you go to a dermatologist. And what is easier than a web application that you can access from anywhere and at anytime.
            <br/>
            This project can be used in 2 scenarios. Either by normal persons that are suspicious of having melanoma or by doctors.
            </Typography>
        </Paper>

        <Box
            sx={{
                display: "flex",
                alignItems: "start",
                // justifyContent: "space-between"
                gap: 3,
                mb: 4
            }}
        >
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    flexBasis: "50%"
                }}
            >
                <Typography
                    variant="button"
                    component="h1"
                    align="center"
                    sx={{
                        fontSize: "20px",
                        mb: 2,
                        color: 'primary.main'
                    }}
                >As a doctor</Typography>
                <Typography
                    align="center"
                    component="div"
                    sx={{
                        fontSize: "18px",
                        fontWeight: 400
                    }}
                >
                This application can be used by doctors to help them in the diagnosis process without having to do a lot of testing just to get initial results, you can think of the application as the replacement of the doctor’s naked eye analysis, and after that he/she can decide whether to do more extensive testing such as biopsies
                </Typography>
            </Paper>
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    flexBasis: "50%"
                }}
            >
                <Typography
                    variant="button"
                    component="h1"
                    align="center"
                    sx={{
                        fontSize: "20px",
                        mb: 2,
                        color: 'primary.main'
                    }}
                >As a patient</Typography>
                <Typography
                    align="center"
                    component="div"
                    sx={{
                        fontSize: "18px",
                        fontWeight: 400
                    }}
                >
                    they can use the application to decide whether to go to a dermatologist for further testing and confirmation
                </Typography>
            </Paper>

        </Box>


        <Paper 
            elevation={0}
            sx={{
                p: 2,
                mb: 4
            }}
        >
            <Typography
                variant="button"
                component="h1"
                align="center"
                sx={{
                    fontSize: "20px",
                    mb: 2,
                    color: 'primary.main'
                }}
            >
                <Divider>
                    All Users
                </Divider>
            </Typography>
            <Typography
                // align="center"
                // variant="button"
                component="div"
                sx={{
                    fontSize: "18px",
                    fontWeight: 400
                }}
            >
                And as an added feature every user of the application can decide whether or not to publish his lesion image, which will then be accessible to all the doctors inside the application, and they can comment on it and give their professional opinion, after that the user can communicate with a doctor using the in-application messaging feature, to get more information or to make an appointment
            </Typography>
        </Paper>
        
            <Paper 
            // elevation={3}
            sx={{
                p: 2,
                mb: 4,
                borderLeft: "10px solid orange"
            }}
        >
            <Typography
                variant="button"
                component="h1"
                // align="center"
                sx={{
                    fontSize: "20px",
                    mb: 2,
                    color: 'orange'
                }}
            >Note:</Typography>
            <Typography
                // align="center"
                // variant="button"
                component="div"
                sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    
                }}
            >
                If you are a newly registered doctor, You need to verify your account by sending your credentials to the admin via e-mail: <a href = "mailto: khodja.moussa@yahoo.com" style={{color: "white"}}>khodja.moussa@yahoo.com</a>

            </Typography>
        </Paper>
        
            {/* <Paper 
            elevation={3}
            sx={{
                p: 2,
                mb: 4
            }}
        >
            <Typography
                variant="button"
                component="h1"
                // align="center"
                sx={{
                    fontSize: "20px",
                    mb: 2,
                    color: 'primary.main'
                }}
            >Secondary Goal</Typography>
            <Typography
                // align="center"
                // variant="button"
                component="div"
                sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    
                }}
            >
                As a secondary goal, this project allows the collection of new skin lesions dataset, by saving users uploaded images after stripping it off their private information

            </Typography> */}
        {/* </Paper> */}
        </Container>
        
    </>
  );
}

