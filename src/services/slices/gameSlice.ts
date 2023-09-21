import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchGames } from '../../utils/fetchGames';
import { IAction, IActionPayload, IInitialState } from '../interfaces';

const initialState: IInitialState = {
  games: [],
  status: '',
  error: null,
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    removeCard(state, action: PayloadAction<IActionPayload>) {
      state.games = state.games.filter((game) => game.id !== action.payload.id);
    },
    toggleLikes(state, action: PayloadAction<IActionPayload>) {
      const toggleCard = state.games.find(
        (game) => game.id === action.payload.id,
      );
      if (toggleCard) toggleCard.likes = !toggleCard.likes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action: IAction) => {
        state.status = 'resolved';
        state.games = action.payload;
      })
      .addMatcher(
        isRejectedWithValue(fetchGames),
        (state, action: PayloadAction<unknown>) => {
          state.status = 'rejected';
          state.error = (action.payload as Error).message;
        },
      );
  },
});

export const { removeCard, toggleLikes } = gameSlice.actions;
export default gameSlice.reducer;
