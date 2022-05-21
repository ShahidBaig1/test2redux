import { configureStore } from "@reduxjs/toolkit";
import getFeatured from "./features/featuredArts/slicer/getFeaturedSlicer";
import getCreator from "./features/featuredCreators/slicers/getCreatorsSlicer"
export const store = configureStore({
  reducer: { getFeatured,getCreator },
});
