import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieType } from "../../types";

interface WishlistState {
  items: MovieType[];
}

const savedWishlist = localStorage.getItem("wishlist");

const initialState: WishlistState = {
  items: savedWishlist ? JSON.parse(savedWishlist) : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<MovieType>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1); 
      } else {
        state.items.push(action.payload); 
      }
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;