import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchGames } from '../../utils/fetchGames';
import { IAction, IInitialState } from '../interfaces';

const initialState: IInitialState = {
  games: [],
  status: '',
  error: null,
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state: IInitialState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        fetchGames.fulfilled,
        (state: IInitialState, action: IAction) => {
          state.status = 'resolved';
          state.games = action.payload;
        }
      )
      .addMatcher(
        isRejectedWithValue(fetchGames),
        (state: IInitialState, action: PayloadAction<unknown>) => {
          state.status = 'rejected';
          state.error = (action.payload as Error).message;
        }
      );
  },
});

export default gameSlice.reducer;
