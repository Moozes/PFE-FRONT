import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import theme from '../theme';


export default function SingleMessage(props) {
    let myMessage = props.myMessage
    
    const receiverMessageStyle = {
        backgroundColor: theme.palette.grey[900],
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
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            {myMessage && (
                <div style={{minWidth: "5%", justifySelf: "stretch"}} ></div>
            )}
            <Paper elevation={2} sx={{
                p: 1,
                ...(myMessage ? senderMessageStyle : receiverMessageStyle)
            }}>
                {props.message.text}
            </Paper>
            {!myMessage && (
                <div style={{minWidth: "10%", justifySelf: "stretch"}} ></div>
            )}
        </Box>
    </>
  );
}