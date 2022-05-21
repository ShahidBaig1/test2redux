import { createSlice } from "@reduxjs/toolkit";
import { getFeaturedArts } from "../action/index";

const initialState = {
  featuredArts: [],
  artsLoading: false,
  artsLoadedSuccess: false,
  artsLoadedFailed: false,
};

const getFeatured = createSlice({
  name: "getFeatured",
  initialState,
  extraReducers: {
    [getFeaturedArts.pending]: (state) => {
      state.artsLoading = true;
    },
    [getFeaturedArts.fulfilled]: (state, action) => {
      state.artsLoading = false;
      state.artsLoadedSuccess = true;
      state.artsLoadedFailed = false;
      state.featuredArts = action.payload.nfts;
    },
    [getFeaturedArts.rejected]: (state) => {
      state.artsLoading = false;
      state.artsLoadedSuccess = false;
      state.artsLoadedFailed = true;
    },
  },
});

export default getFeatured.reducer;
