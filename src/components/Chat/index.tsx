'use client';
import { Paper } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

import { useAskToChatMutation, useGetChatBySessionQuery } from '@/store/services/chatApi';
import { ChatMessage } from '@/types';

const ChatComponent = () => {
  const { data: messages, isLoading: isSessionLoading, isError: isSessionLoadingError } = useGetChatBySessionQuery();
  const [sendTochat, { isLoading: isNewMessageLoading, isError: isNewMessageError }] = useAskToChatMutation();
  const selectedApi = useSelector((state: RootState) => state.apiSelectReducer.value.path);

  const [inputFieldValue, setInputFieldValue] = useState('');

  const handleInputSubmit = useCallback(() => {
    sendTochat({
      content: inputFieldValue,
      api: selectedApi,
    });
  }, [inputFieldValue, selectedApi, sendTochat]);

  const handleInputFieldChange = useCallback((value: string) => {
    setInputFieldValue(value);
  }, []);

  const handleInputClearField = () => {
    setInputFieldValue('');
  };

  const messagesToShow: ChatMessage[] | undefined = useMemo(() => {
    const resultMessages: ChatMessage[] = [];
    if (!messages || isSessionLoadingError) {
      resultMessages.push({ role: 'system', content: 'System: How can we help you today?' });
    } else {
      resultMessages.push(...messages);
    }
    if (isNewMessageLoading) {
      const content = inputFieldValue;
      handleInputClearField();
      resultMessages.push({ role: 'user', content });
    }
    if (messages && isNewMessageLoading) {
      const content = inputFieldValue;
      handleInputClearField();
      return [...messages, { role: 'user', content }];
    }
    return resultMessages;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewMessageLoading, messages]);
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
        messages={messagesToShow}
        isSessionLoading={isSessionLoading}
        isNewMessageLoading={isNewMessageLoading}
        isNewMessageError={isNewMessageError}
      />
      <ChatInput
        disabled={isSessionLoading}
        value={inputFieldValue}
        onChange={handleInputFieldChange}
        onSubmit={handleInputSubmit}
      />
    </Paper>
  );
};

export default ChatComponent;
