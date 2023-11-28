import { configureStore } from '@reduxjs/toolkit';

import apiSelectReducer from './slices/apiSelectSlice';
import { chatApi } from './services/chatApi';

const store = configureStore({
  reducer: { apiSelectReducer, [chatApi.reducerPath]: chatApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
