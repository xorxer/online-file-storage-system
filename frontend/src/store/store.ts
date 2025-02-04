import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';

// Create redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Type checking for useSelector
export type RootState = ReturnType<typeof store.getState>;
// Type checking for dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
