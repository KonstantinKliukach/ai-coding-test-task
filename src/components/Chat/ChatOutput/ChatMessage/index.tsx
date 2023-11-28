import { ChatMessage } from '@/types';
import { Box, SxProps } from '@mui/material';
import React, { forwardRef } from 'react';

interface ChatMessageProps extends ChatMessage {
  sx?: SxProps;
}

const ChatMessageComponent = forwardRef<HTMLDivElement, ChatMessageProps>(({ content, role, sx }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
        borderRadius: 6,
        padding: 2,
        borderTopLeftRadius: role === 'assistant' ? 2 : undefined,
        borderTopRightRadius: role == 'user' ? 6 : undefined,
        backgroundColor: role !== 'user' ? 'secondary.dark' : 'primary.dark',
        color: 'contrastText',
      }}
    >
      {content}
    </Box>
  );
});

ChatMessageComponent.displayName = 'ChatMessage';

export default ChatMessageComponent;
