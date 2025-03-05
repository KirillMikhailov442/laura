import { configureStore } from '@reduxjs/toolkit';
import registration from './slices/registration';
import modals from './slices/modals';

export const store = configureStore({
  reducer: {
    registration,
    modals,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
