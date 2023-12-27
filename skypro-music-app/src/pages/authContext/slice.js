import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  activeTrack: false,
  shuffledList: [],
  isShuffledTrackList: false,
  $isPlaying: false,
};

export const sliceTrackList = createSlice({
  name: "music",
  initialState,
  reducers: {
    getAllTrack: (state, action) => {
      state.activeTrack = action.payload;
      state.trackList = action.payload.allTracks;
      state.shuffledList = action.payload.allTracks;
      console.log((state.activeTrack = action.payload));
    },
    getPlayTrack: (state) => {
      state.$isPlaying = true;
    },
    getPauseTrack: (state) => {
      state.$isPlaying = false;
    },
    getNextTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList.sort(() => Math.random() - 0.5)
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
        console.log(track.id);
        return track.id === state.activeTrack.id;
      });

      if (allTrackList[tracksIndex + 1]) {
        state.activeTrack = allTrackList[tracksIndex + 1];
      }
    },
    getPrevTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
        console.log(track.id);
        return track.id === state.activeTrack.id;
      });

      if (allTrackList[tracksIndex - 1]) {
        state.activeTrack = allTrackList[tracksIndex - 1];
      }
    },
    getTracksListShuffled: (state) => {
      state.isShuffledTrackList = !state.isShuffledTrackList;
    },
  },
});

export const {
  getAllTrack,
  getPlayTrack,
  getPauseTrack,
  getNextTrack,
  getPrevTrack,
  getTracksListShuffled,
} = sliceTrackList.actions;

export default sliceTrackList.reducer;
