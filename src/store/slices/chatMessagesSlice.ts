import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ChatMessagesState {
  value: ChatMessage[];
}

const initialState: ChatMessagesState = {
  value: [
    {
      _id: '1',
      text: 'Hello! How can I help you today?',
      creator: 'bot',
    },
  ],
};

const chatMessagesSlice = createSlice({
  name: 'chat-messages',
  initialState: initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.value.push(action.payload);
    },
    clearChat: (state) => {
      state.value = [...initialState.value];
    },
  },
});
export const { addMessage } = chatMessagesSlice.actions;

export default chatMessagesSlice.reducer;
