import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import winsReducer from './slices/winsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    wins: winsReducer,
  },
});
