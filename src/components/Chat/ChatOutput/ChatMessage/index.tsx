import { ChatMessage } from '@/types';
import { Box, Skeleton, SxProps } from '@mui/material';
import React, { forwardRef } from 'react';

interface ChatMessageProps extends Partial<ChatMessage> {
  sx?: SxProps;
  isLoading?: boolean;
}

const ChatMessageSkeleton: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
    <Skeleton variant="rectangular" width={400} height={16} />
    <Skeleton variant="rectangular" width={400} height={16} />
    <Skeleton variant="rectangular" width={300} height={16} />
  </Box>
);

const ChatMessageComponent = forwardRef<HTMLDivElement, ChatMessageProps>(({ content, role, sx, isLoading }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
        maxWidth: '80%',
        borderRadius: 6,
        padding: 2,
        borderTopLeftRadius: role === 'assistant' ? 2 : undefined,
        borderTopRightRadius: role == 'user' ? 6 : undefined,
        backgroundColor: role !== 'user' ? 'secondary.dark' : 'primary.dark',
        color: 'contrastText',
        whiteSpace: 'pre-line',
      }}
    >
      {isLoading ? <ChatMessageSkeleton /> : content || ''}
    </Box>
  );
});

ChatMessageComponent.displayName = 'ChatMessage';

export default ChatMessageComponent;
