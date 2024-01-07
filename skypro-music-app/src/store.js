import { configureStore } from "@reduxjs/toolkit";
import sliceTrackList from "./pages/authContext/slice";
import { apiMusic } from "./api/apiMusic";

export const store = configureStore({
  reducer: {
    music: sliceTrackList,
    [apiMusic.reducerPath]: apiMusic.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(apiMusic.middleware),
});
