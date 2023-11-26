import { configureStore } from '@reduxjs/toolkit';

import apiSelectReducer from './slices/ApiSelectSlice';

const store = configureStore({
  reducer: { apiSelectReducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
