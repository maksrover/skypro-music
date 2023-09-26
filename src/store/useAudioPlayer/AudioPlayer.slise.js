import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: [], // Здесь будет плейлист

  currentTrackIndex: 0, // Индекс текущего трека 
  isShuffling: false,
  // currentTrack: {
  //   trackUrl: '', 
  //   trackAuthor: '', 
  //   trackName: '', 
  //   trackTime: 0,
  // },
  
  // currentTrackUrl: '', // URL of the currently playing track
  // trackAuthor: '', // Author of the currently playing track
  // trackName: '', // Name of the currently playing track
  // trackTime: 0,
  currentlyPlayingItem: null,
  isPlaying: true,
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload
      console.log('Список треков:', state.tracks);
    },
    playTrack: (state, action) => {
      state.currentlyPlayingItem = action.payload
      console.log(state.currentlyPlayingItem);
      const selectedTrack = state.tracks[state.currentlyPlayingItem]
      if (selectedTrack) {
        state.currentTrackUrl = selectedTrack.track_file
        state.trackAuthor = selectedTrack.author
        state.trackName = selectedTrack.name
        state.trackTime = selectedTrack.duration_in_seconds
      }

    },
    playNextTrack: (state) => {
      const currentIndex = state.currentlyPlayingItem
      const isShuffle = state.isShuffling
      let nextIndex

      if (isShuffle) {

        nextIndex = Math.floor(Math.random() * state.tracks.length)
      } else {

        nextIndex =
          currentIndex === null ? 0 : (currentIndex + 1) % state.tracks.length
      }

      state.currentlyPlayingItem = nextIndex

      // state.isPlaying = true
      const selectedTrack = state.tracks[state.currentlyPlayingItem]
      state.currentTrackUrl = selectedTrack.track_file
      state.trackAuthor = selectedTrack.author
      state.trackName = selectedTrack.name
      state.trackTime = selectedTrack.duration_in_seconds
      
    },
    playPreviousTrack: (state) => {
      const currentIndex = state.currentlyPlayingItem
      const isShuffle = state.isShuffling
      let prevIndex

      if (isShuffle) {

        prevIndex = Math.floor(Math.random() * state.tracks.length)
      } else {

        prevIndex =
          currentIndex === -1
            ? state.tracks.length - 1
            : (currentIndex - 1 + state.tracks.length) % state.tracks.length
      }

      state.currentlyPlayingItem = prevIndex

      state.isPlaying = true
    },
    toggleShuffle: (state) => {
      state.isShuffling = !state.isShuffling
    },

    setCurrentlyPlaying: (state, action) => {
      state.currentlyPlayingItem = action.payload;
      // state.currentTrackIndex = action.payload;
      // state.isPlaying = true

    },
    togglePlayState: (state) => {
  
      state.isPlaying = !state.isPlaying; 
      
      // console.log(isPlaying);
      console.log(state.isPlaying);
    },
  },
})

export const {
  setTracks,
  playTrack,
  playNextTrack,
  playPreviousTrack,
  toggleShuffle,
  setCurrentlyPlaying,
  togglePlayState,
} = playlistSlice.actions

export default playlistSlice.reducer
