import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  lastId: null,
  loading: null,
  newsLoad: true,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsRequest(state) {
      state.loading = true;
    },
    newsSuccess(state, action) {
      state.items = [...state.items, ...action.payload];
      state.lastId = action.payload.at(-1).id;
      state.loading = false;

      if (action.payload.length < 5) {
        state.newsLoad = false;
      }
    },
  },
});

export const { newsSuccess, newsRequest } = newsSlice.actions;
export default newsSlice.reducer;
