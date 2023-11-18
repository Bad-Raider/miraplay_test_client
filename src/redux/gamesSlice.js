import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [],
  genre: '',
  page: 1,
  gamesListLength: 0
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: {
      reducer(state, action) {
        state = { ...state, ...action.payload.value, };
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    resetGames: {
      reducer(state) {
        state = initialState;
        return state;
      },
    },
    setGenre: {
        reducer(state, action){
            state.genre = action.payload;
            return state;
        }
    },
    setPage: {
        reducer(state, action){
            state.genre = action.payload;
            return state;
        }
    }
  },
});

export const { setGames, resetGames, setGenre, setPage } = gamesSlice.actions;

export const gamesReducer = gamesSlice.reducer;