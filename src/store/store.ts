import { configureStore } from '@reduxjs/toolkit';
import registration from './slices/registration';

export const store = configureStore({
  reducer: {
    registration,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
