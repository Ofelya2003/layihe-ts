import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("lang") || "az";

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      const newLang = action.payload;
      localStorage.setItem("lang", newLang);
      return newLang;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;