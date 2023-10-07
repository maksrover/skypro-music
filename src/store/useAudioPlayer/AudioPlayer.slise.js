import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: [], // Здесь будет плейлист
  currentTrackIndex: 0, // Индекс текущего трека
  isShuffling: false,
  currentlyPlayingItem: null,
  isPlaying: true,
  currentTrackUrl: null,
  showAudioPlayer: false,
  // isLiked: true,
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    // setTracks должен вызываться только тогда, когда ты включаешь трек в другом плейлисте
    setTracks: (state, action) => {
      state.tracks = action.payload
    },
    playTrack: (state, action) => {
      state.currentlyPlayingItem = action.payload
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
      state.isPlaying = true
      state.showAudioPlayer = true
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
        if (currentIndex === state.tracks.length - 1) {
          return state
        }
        nextIndex = (currentIndex + 1) % state.tracks.length
      }

      state.currentlyPlayingItem = state.tracks[nextIndex].id
      const selectedTrack = state.tracks[nextIndex]
      state.currentTrackUrl = selectedTrack.track_file
      state.trackAuthor = selectedTrack.author
      state.trackName = selectedTrack.name
      state.trackTime = selectedTrack.duration_in_seconds
      state.isPlaying = true

    },
    playPreviousTrack: (state) => {
      const currentIndex = state.tracks.findIndex((track) => {
        if (track.id === state.currentlyPlayingItem) {
          return true
        } else {
          return false
        }
      })

      if (currentIndex === 0) {
        return state
      }

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
      state.isPlaying = true
      return state
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
