import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: [], // Здесь будет плейлист
  currentTrackIndex: 0, // Индекс текущего трека
  isShuffling: false,
  currentlyPlayingItem: null,
  isPlaying: true,
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload
    },
    playTrack: (state, action) => {
      state.currentlyPlayingItem = action.payload
      // console.log(state.currentlyPlayingItem);
      console.log('aciton payload:', action.payload)
      const selectedTrack = state.tracks.find((track) => {
        if (track.id === action.payload) {
          return true
        } else {
          return false
        }
      })
      if (selectedTrack) {
        state.currentTrackUrl = selectedTrack.track_file
        state.trackAuthor = selectedTrack.author
        state.trackName = selectedTrack.name
        state.trackTime = selectedTrack.duration_in_seconds
      }
    },
    playNextTrack: (state) => {
      const currentIndex = state.tracks.findIndex((track) => {
        if (track.id === state.currentlyPlayingItem) {
          return true
        } else {
          return false
        }
      })
      const isShuffle = state.isShuffling
      let nextIndex

      if (isShuffle) {
        nextIndex = Math.floor(Math.random() * state.tracks.length)
      } else {
        nextIndex =
          currentIndex === null ? 0 : (currentIndex + 1) % state.tracks.length
      }

      state.currentlyPlayingItem = state.tracks[nextIndex].id
      const selectedTrack = state.tracks[nextIndex]
      state.currentTrackUrl = selectedTrack.track_file
      state.trackAuthor = selectedTrack.author
      state.trackName = selectedTrack.name
      state.trackTime = selectedTrack.duration_in_seconds
    },
    playPreviousTrack: (state) => {
      const currentIndex = state.tracks.findIndex((track) => {
        if (track.id === state.currentlyPlayingItem) {
          return true
        } else {
          return false
        }
      })
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

      state.currentlyPlayingItem = state.tracks[prevIndex].id
      const selectedTrack = state.tracks[prevIndex]
      state.currentTrackUrl = selectedTrack.track_file
      state.trackAuthor = selectedTrack.author
      state.trackName = selectedTrack.name
      state.trackTime = selectedTrack.duration_in_seconds
    },
    toggleShuffle: (state) => {
      state.isShuffling = !state.isShuffling
    },

    setCurrentlyPlaying: (state, action) => {
      state.currentlyPlayingItem = action.payload
    },
    togglePlayState: (state) => {
      state.isPlaying = !state.isPlaying
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
