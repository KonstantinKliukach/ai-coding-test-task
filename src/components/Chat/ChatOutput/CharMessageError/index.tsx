import { ChatMessage } from '@/types';
import { Box, Skeleton, SxProps } from '@mui/material';
import React, { forwardRef } from 'react';

interface ChatMessageErrorComponentProps {
  sx?: SxProps;
}

const ChatMessageErrorComponent = forwardRef<HTMLDivElement, ChatMessageErrorComponentProps>(({ sx }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
        maxWidth: '80%',
        borderRadius: 6,
        padding: 2,
        borderTopLeftRadius: 2,
        backgroundColor: 'error.main',
        whiteSpace: 'pre-line',
      }}
    >
      {'Sorry, but your request to server failed. Please, try again later'}
    </Box>
  );
});

ChatMessageErrorComponent.displayName = 'ChatErrorMessageComponent';

export default ChatMessageErrorComponent;
