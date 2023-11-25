import { Paper, TextField } from '@mui/material';
import React from 'react';

const ChatInput = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        top: 'auto',
        bottom: 0,
        left: 0,
        right: 0,
        paddingX: 4,
        paddingY: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
    >
      <TextField multiline maxRows={10} variant="outlined" fullWidth placeholder={"Let's do something awesome"} />
    </Paper>
  );
};

export default ChatInput;
