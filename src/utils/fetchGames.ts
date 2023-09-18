import { createAsyncThunk } from '@reduxjs/toolkit';
import { ALL_CARD } from './constants';

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(ALL_CARD, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '7a6f60c5c3msh95164840bd776adp11326ajsne4845d1e77fd',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      });

      if (!res.ok) throw new Error('Server Error!');

      const data = await res.json();

      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
