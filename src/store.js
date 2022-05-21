import { configureStore } from "@reduxjs/toolkit";
import getFeatured from "./features/featuredArts/slicer/getFeaturedSlicer";
import getCreator from "./features/featuredCreators/slicers/getCreatorsSlicer";
import getArtsCreated from "./features/createdArts/slicer/createdArtsSlicer";
export const store = configureStore({
  reducer: { getFeatured, getCreator, getArtsCreated },
});
