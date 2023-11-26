import { Box } from '@mui/material';
import React, { useCallback, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

interface ChatOutputProps {
  messages: ChatMessage[];
}

const ChatOutput: React.FC<ChatOutputProps> = ({ messages }) => {
  const lastMessage = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (lastMessage.current) {
      scrollToBottom();
    }
  }, [messages, scrollToBottom]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        minHeight: '100%',
        maxHeight: '100%',
        padding: 2,
      }}
    >
      {messages.map((message, index) => (
        <ChatMessage
          sx={{
            alignSelf: message.creator === 'bot' ? 'start' : 'end',
          }}
          key={message._id}
          {...message}
          ref={index + 1 === messages.length ? lastMessage : undefined}
        />
      ))}
    </Box>
  );
};

export default ChatOutput;
