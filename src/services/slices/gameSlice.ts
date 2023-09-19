import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchGames } from '../../utils/fetchGames';
import { IAction, IGame, IInitialState } from '../interfaces';

const initialState: IInitialState = {
  games: [],
  status: '',
  error: null,
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    removeCard(state, action: PayloadAction<IGame>) {
      state.games ===
        state.games.filter((game) => game.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        fetchGames.fulfilled,
        (state, action: IAction) => {
          state.status = 'resolved';
          state.games = action.payload;
        },
      )
      .addMatcher(
        isRejectedWithValue(fetchGames),
        (state, action: PayloadAction<unknown>) => {
          state.status = 'rejected';
          state.error = (action.payload as Error).message;
        },
      );
  },
});

export const { removeCard } = gameSlice.actions;
export default gameSlice.reducer;
