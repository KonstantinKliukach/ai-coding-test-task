import { Paper, TextField } from '@mui/material';
import React, { useState } from 'react';

interface ChatInputProps {
  onSubmit: (content: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [fieldValue, setFieldValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(fieldValue);
    handleClearField();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };
  const handleClearField = () => {
    setFieldValue('');
  };
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        top: 'auto',
        bottom: 0,
        left: 0,
        right: 0,
        paddingX: 4,
        paddingY: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          autoComplete="off"
          placeholder={"Let's do something awesome"}
          value={fieldValue}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
};

export default ChatInput;
