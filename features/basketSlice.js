import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

//actions reducers combined in slice
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addtobasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let index = -1;
      for (var x = 0; x < state.items.length; ++x) {
        if (state.items[x].id == action.payload.id) {
          index = x;
          break;
        }
      }
      console.log(index);
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as not in basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addtobasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items; //initial state transfer

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
