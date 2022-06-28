import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import theme from '../theme';


export default function SingleMessage(props) {
    let myMessage = true
    
    const receiverMessageStyle = {
        backgroundColor: theme.palette.grey[700],
        color: theme.palette.text.primary
    }
    const senderMessageStyle = {
        backgroundColor: theme.palette.grey[700],
        color: theme.palette.text.primary
    }
  return (
    <>
        <Box
            sx={{
                display: "flex"
            }}
        >
            {myMessage && (
                <div style={{minWidth: "5%", justifySelf: "stretch"}} ></div>
            )}
            <Paper elevation={2} sx={{
                p: 1,
                ...(myMessage ? senderMessageStyle : receiverMessageStyle)
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i
            </Paper>
            {!myMessage && (
                <div style={{minWidth: "10%", justifySelf: "stretch"}} ></div>
            )}
        </Box>
    </>
  );
}