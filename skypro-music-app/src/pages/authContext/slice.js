import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  activeTrack: null,
  shuffledList: [],
  isShuffledTrackList: false,
  isPlaying: false,
};

export const sliceTrackList = createSlice({
  name: "music",
  initialState,
  reducers: {
    getAllTrack: (state, action) => {
      state.activeTrack = action.payload;
      state.trackList = action.payload.data;
      state.shuffledList = action.payload.allTracks;
    },
    getPlayTrack: (state) => {
      state.isPlaying = true;
    },
    getPauseTrack: (state) => {
      state.isPlaying = false;
    },
    getNextTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList.sort(() => Math.random() - 0.5)
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
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

      const tracksIndex = allTrackList.findIndex(
        (track) => track.id === state.activeTrack.id
      );

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
