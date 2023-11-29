import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ApiChoice {
  name: string;
  path: string;
}

interface ApiSelectState {
  value: ApiChoice;
}

export const Apis: { [key: string]: ApiChoice } = Object.freeze({
  GPT3: {
    name: 'GPT 3.5',
    path: '/chat3',
  },
  GTP3WD: { name: 'GPT 3.5WD', path: '/chat3withData' },
  GPT4: { name: 'GPT 4', path: '/chat4' },
  DALLE: { name: 'DALL-E', path: '/dalle' },
});

const initialState = { value: Apis.GPT3 } as ApiSelectState;

const apiSelectSlice = createSlice({
  name: 'api-select',
  initialState: initialState,
  reducers: {
    selectApi: (state, action: PayloadAction<ApiChoice>) => {
      state.value = action.payload;
    },
  },
});
export const { selectApi } = apiSelectSlice.actions;

export default apiSelectSlice.reducer;
