import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, InputBase } from '@mui/material';
import { useState } from 'react';


export default function MessageForm(props) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data.get('text'))
    props.handleSendMessage(data.get('text'))
    setText('')
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
              <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  required
                  value={text}
                  onChange={handleChange}
                  name="text"
                  placeholder="Message..."
                  inputProps={{ 'aria-label': 'Message...' }}
                />
                <Button type="submit" variant="contained">Send</Button>
              </Paper>
  );
}

