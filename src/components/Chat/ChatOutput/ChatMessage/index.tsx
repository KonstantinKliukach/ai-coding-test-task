import { Box, SxProps } from '@mui/material';
import React, { forwardRef } from 'react';

interface ChatMessageProps extends ChatMessage {
  sx?: SxProps;
}

const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(({ text, creator, sx }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
        borderRadius: 6,
        padding: 2,
        borderTopLeftRadius: creator === 'bot' ? 2 : undefined,
        borderTopRightRadius: creator == 'user' ? 6 : undefined,
        backgroundColor: creator === 'bot' ? 'secondary.dark' : 'primary.dark',
        color: 'contrastText',
      }}
    >
      {text}
    </Box>
  );
});

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
