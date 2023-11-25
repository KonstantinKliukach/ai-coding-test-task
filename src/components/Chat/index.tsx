import { Paper } from '@mui/material';
import React from 'react';
import ChatInput from './ChatInput';

const ChatComponent = () => {
  return (
    <Paper
      sx={{
        minHeight: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderBottom: 0,
        position: 'relative',
      }}
    >
      <ChatInput />
    </Paper>
  );
};

export default ChatComponent;
