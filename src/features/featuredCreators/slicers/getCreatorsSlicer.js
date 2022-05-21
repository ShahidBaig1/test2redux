import { createSlice } from "@reduxjs/toolkit";
import { getFeaturedCreators } from "../actions/index";

const initialState = {
  featuredCreators: [],
  featureLoading: false,
  featuresLoadedSuccess: false,
  featuresLoadedFailed: false,
};

const getCreator = createSlice({
  name: "getCreator",
  initialState,
  extraReducers: {
    [getFeaturedCreators.pending]: (state) => {
      state.featureLoading = true;
    },
    [getFeaturedCreators.fulfilled]: (state, action) => {
      state.featureLoading = false;
      state.featuresLoadedSuccess = true;
      state.featuresLoadedFailed = false;
      state.featuredCreators = action.payload;
    },
    [getFeaturedCreators.rejected]: (state) => {
      state.featureLoading = false;
      state.featuresLoadedSuccess = false;
      state.featuresLoadedFailed = true;
    },
  },
});

export default getCreator.reducer;
