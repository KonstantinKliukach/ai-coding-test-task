import { Paper, TextField, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

interface ChatInputProps {
  onSubmit: () => void;
  onChange: (value: string) => void;
  disabled: boolean;
  value: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit, value, onChange, disabled }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
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
        paddingX: isSmallScreen ? 1 : 4,
        paddingY: isSmallScreen ? 1 : 4,
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
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </form>
    </Paper>
  );
};

export default ChatInput;
