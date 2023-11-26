import { configureStore } from '@reduxjs/toolkit';

import ApiSelectReducer from './slices/ApiSelectSlice';

const store = configureStore({
  reducer: { ApiSelectReducer },
});
export default store;
