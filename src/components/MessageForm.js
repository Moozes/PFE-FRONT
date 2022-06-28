import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, InputBase } from '@mui/material';



export default function MessageForm() {


  return (
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Message..."
                  inputProps={{ 'aria-label': 'Message...' }}
                />
                <Button variant="contained">Send</Button>
              </Paper>
  );
}

