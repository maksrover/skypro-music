import { configureStore } from "@reduxjs/toolkit";
import { sliceTrackList } from "./pages/authContext/slice";

export const store = configureStore({
  reducer: {
    music: sliceTrackList.reducer,
  },
});
