'use client';

import { Container } from '@mui/system';
import React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ModelSelect from '@/components/ModelSelect';

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container
      sx={() => ({
        minHeight: 'calc(100vh - 64px)',
        height: !isSmallScreen ? 'calc(100vh - 64px)' : 'auto',
        paddingY: 4,
        paddingBottom: isSmallScreen ? 0 : 4,
        paddingX: isSmallScreen ? 0 : undefined,
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: !isSmallScreen ? 'flex-start' : undefined,
        gap: 2,
      })}
    >
      <ModelSelect size={isSmallScreen ? 'large' : 'medium'} orientation={isSmallScreen ? 'horizontal' : 'vertical'} />
      {children}
    </Container>
  );
};

export default ChatLayout;
