import { configureStore } from '@reduxjs/toolkit';

import apiSelectReducer from './slices/apiSelectSlice';
import chatMessagesReducer from './slices/chatMessagesSlice';

const store = configureStore({
  reducer: { apiSelectReducer, chatMessagesReducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
