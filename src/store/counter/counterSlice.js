import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = 
createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incriment: (state) => {
      state = state + 1;

      return state;
    },
    decrement: (state) => {
      state = state - 1;

      return state;
    },
    incrimentByAmount: (state, action) => {
      state = state + action.payload;

      return state;
    }
  }
});

export const { incriment, decrement } = counterSlice.actions;

export default counterSlice.reducer;