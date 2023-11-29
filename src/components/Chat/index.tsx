'use client';
import { Paper } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

import { useAskToChatMutation, useGetChatBySessionQuery } from '@/store/services/chatApi';

const ChatComponent = () => {
  const { data: messages, isLoading, isError } = useGetChatBySessionQuery();
  const [sendTochat, { isLoading: isNewMessageLoading }] = useAskToChatMutation();
  const selectedApi = useSelector((state: RootState) => state.apiSelectReducer.value.path);

  const [inputFieldValue, setInputFieldValue] = useState('');

  const handleInputSubmit = useCallback(() => {
    sendTochat({
      content: inputFieldValue,
      api: selectedApi,
    });
    handleInputClearField();
  }, [inputFieldValue, selectedApi, sendTochat]);

  const handleInputFieldChange = useCallback((value: string) => {
    setInputFieldValue(value);
  }, []);

  const handleInputClearField = () => {
    setInputFieldValue('');
  };

  return (
    <Paper
      sx={{
        minHeight: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderBottom: 0,
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ChatOutput
        messages={messages}
        isLoading={isLoading}
        isError={isError}
        isNewMessageLoading={isNewMessageLoading}
      />
      <ChatInput value={inputFieldValue} onChange={handleInputFieldChange} onSubmit={handleInputSubmit} />
    </Paper>
  );
};

export default ChatComponent;
