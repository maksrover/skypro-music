import { createSlice } from '@reduxjs/toolkit'
import { getIsLiked } from '../../getIsLiked'

const initialState = {
  tracks: [], // Здесь будет плейлист
  currentTrack: null, // Индекс текущего трека
  isShuffling: false,
  currentlyPlayingItem: null,
  isPlaying: true,
  currentTrackUrl: null,
  showAudioPlayer: false,
  isLiked: true,
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    // setTracks должен вызываться только тогда, когда ты включаешь трек в другом плейлисте
    setTracks: (state, action) => {
      state.tracks = action.payload
      console.log(state.tracks)
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
        state.trackId = selectedTrack.id
        state.currentTrack = selectedTrack
        console.log(state.trackId)
        // state.trackId = selectedTrack.id
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
      state.currentTrack = selectedTrack
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
      state.currentTrack = selectedTrack
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
    hideAudioPlayer: (state) => {
      state.showAudioPlayer = false
    },
    like: (state, action) => {
      const currentTrack = state.tracks.find(
        (track) => track.id === action.payload.id,
      )
      const isLiked = getIsLiked({
        track: currentTrack,
        user: action.payload.user,
      });
      
      if (isLiked) {
        if (state.tracks[0].stared_user) {
          state.tracks = state.tracks.map((track) => (
            track.id === action.payload.id ? 
              {
                ...track,
                stared_user: track.stared_user.filter((u) => u.id !== action.payload.user.id)
              }
              :
              track
          ))
        } else {
          state.tracks = state.tracks.filter((track) => track.id !== action.payload.id);
        }
      } else {
        state.tracks = state.tracks.map((track) => (
          track.id === action.payload.id ? 
            {
              ...track,
              stared_user: [...track.stared_user, action.payload.user]
            }
            :
            track
        ))
      }
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
  hideAudioPlayer,
  like,
} = playlistSlice.actions

export default playlistSlice.reducer
