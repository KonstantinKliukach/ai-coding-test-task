import { Box, CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useRef } from 'react';

import { styled } from '@mui/material/styles';

import { ChatMessage } from '@/types';
import ChatMessageComponent from './ChatMessage';

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

interface ChatOutputProps {
  messages?: ChatMessage[];
  isLoading: boolean;
  isError: boolean;
  isNewMessageLoading: boolean;
}

const ChatOutput: React.FC<ChatOutputProps> = ({ messages, isError, isLoading, isNewMessageLoading }) => {
  const lastMessage = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (lastMessage.current) {
      scrollToBottom();
    }
  }, [messages, isNewMessageLoading, scrollToBottom]);

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
        <ChatMessageComponent
          sx={{
            alignSelf: message.role !== 'user' ? 'start' : 'end',
          }}
          key={message._id}
          {...message}
          ref={index + 1 === messages.length && !isLoading ? lastMessage : undefined}
        />
      ))}
      {isNewMessageLoading ? (
        <ChatMessageComponent
          sx={{
            alignSelf: 'start',
          }}
          isLoading
          ref={lastMessage}
        />
      ) : null}
    </ChatContainer>
  );
};

export default ChatOutput;
