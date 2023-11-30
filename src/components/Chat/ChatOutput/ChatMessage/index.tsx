import { ChatMessage } from '@/types';
import { Box, Skeleton, SxProps, useMediaQuery, useTheme } from '@mui/material';
import React, { forwardRef } from 'react';

interface ChatMessageProps extends Partial<ChatMessage> {
  sx?: SxProps;
  isLoading?: boolean;
}

const ChatMessageSkeleton: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Skeleton variant="rectangular" width={!isSmallScreen ? 400 : 160} height={16} />
      <Skeleton variant="rectangular" width={!isSmallScreen ? 400 : 160} height={16} />
      <Skeleton variant="rectangular" width={!isSmallScreen ? 300 : 120} height={16} />
    </Box>
  );
};

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
