import { createSlice } from "@reduxjs/toolkit";
import { getCreatedArts } from "../action/index";

const initialState = {
  createdArts: [],
  createartsLoading: false,
  createLoadedSuccess: false,
  createcreateartsLoadedFailed: false,
};

const getArtsCreated = createSlice({
  name: "getCreatedArts",
  initialState,
  extraReducers: {
    [getCreatedArts.pending]: (state) => {
      state.createartsLoading = true;
    },
    [getCreatedArts.fulfilled]: (state, action) => {
      state.createartsLoading = false;
      state.createLoadedSuccess = true;
      state.createartsLoadedFailed = false;
      state.createdArts = action.payload;
    },
    [getCreatedArts.rejected]: (state) => {
      state.createartsLoading = false;
      state.createLoadedSuccess = false;
      state.createartsLoadedFailed = true;
    },
  },
});

export default getArtsCreated.reducer;
