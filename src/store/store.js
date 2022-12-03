import { configureStore } from "@reduxjs/toolkit";
import counterReduser from './counter/counterSlice';
import basketReducer from './basket/basketSlice';
import filmsSlice from "./allFilms/filmsSlice";

export default configureStore({
  reducer: {
    counter: counterReduser,
    basket: basketReducer,
    films: filmsSlice
  }
});