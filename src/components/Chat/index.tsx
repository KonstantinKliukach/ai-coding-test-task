'use client';
import chatMock from '@/utils/mocks/messages';
import { Paper } from '@mui/material';
import React from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

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
      <ChatOutput messages={chatMock} />
      <ChatInput />
    </Paper>
  );
};

export default ChatComponent;
