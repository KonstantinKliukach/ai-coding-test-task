import { Box, CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

import { styled } from '@mui/material/styles';

import { useGetChatBySessionQuery } from '@/store/services/chatApi';

const ChatContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  minHeight: '100%',
  height: 'calc(100vh - 240px)', // height of top bar + paddings + input
  overflowY: 'auto',
  padding: theme.spacing(2),
  marginBottom: '116px',
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.secondary.light,
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.secondary.dark,
  },
}));

const ChatOutput: React.FC = () => {
  const { data: messages, isLoading, isError } = useGetChatBySessionQuery();

  const lastMessage = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (lastMessage.current) {
      scrollToBottom();
    }
  }, [messages, scrollToBottom]);

  if (isLoading && !messages) {
    return (
      <ChatContainer
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress color="primary" />
      </ChatContainer>
    );
  }

  if (isError) {
    return (
      <ChatContainer
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        An error cccured during the loading..
      </ChatContainer>
    );
  }

  if (!messages) {
    return null;
  }

  return (
    <ChatContainer>
      {messages.map((message, index) => (
        <ChatMessage
          sx={{
            alignSelf: message.role !== 'user' ? 'start' : 'end',
          }}
          key={message._id}
          {...message}
          ref={index + 1 === messages.length ? lastMessage : undefined}
        />
      ))}
    </ChatContainer>
  );
};

export default ChatOutput;
