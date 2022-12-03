import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {},
    reducers: {
      addToBasket(state, { payload }) {
        if (state[payload]) {
            state[payload] += 1;
        } else {
            state[payload] = 1;
        }
      },
      removeFromBasket(state, { payload }) {

        if (state[payload]) {
            state[payload] -= 1;
        } 

        if (state[payload]) {
            return;
        }

        delete state[payload];

      },

      clearBasket(state) {
        return {};
      }
    }
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;