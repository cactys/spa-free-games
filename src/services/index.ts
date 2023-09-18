import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './slices/gameSlice';

export const store = configureStore({
  reducer: {
    games: gameSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
