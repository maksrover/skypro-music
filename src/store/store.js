import { configureStore } from '@reduxjs/toolkit';
import audioPlayerSlice from '../store/useAudioPlayer/AudioPlayer.slise';

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerSlice,
  },
  devTools: true,
});