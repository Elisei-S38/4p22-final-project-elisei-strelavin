import { createSlice } from "@reduxjs/toolkit";

export const filmsSlice = 
  createSlice({
    name: 'films',
    initialState: [],
    reducers: {
      setFilmList: (state, action) => {
          state = action.payload;

          return state;
        }
    }
  });

export const { setFilms } = filmsSlice.actions;

export default filmsSlice.reducer;