import PlaylistItem from '../PlaylistItem/playlistItem'
import * as S from './Playlist.styled'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTracks, playTrack, playNextTrack, playPreviousTrack, toggleShuffle } from '../../store/useAudioPlayer/AudioPlayer.slise';
import { useEffect } from 'react';


const Playlist = ({tracks}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTracks(tracks));
  }, [dispatch, tracks]);

  const [showAudioPlayer, setShowAudioPlayer] = useState(null);
  const [currentTrackUrl, setCurrentTrackUrl] = useState(null);
  const [trackTime, settrackTime] = useState(null)

    const handlePlaylistItemClick = (trackId,  trackUrl, author, name, trackTimer) => {
      console.log(trackId,  trackUrl, author, name, trackTimer);
    setShowAudioPlayer(trackId);
    setCurrentTrackUrl(trackUrl);
    settrackTime(trackTimer)
    dispatch(playTrack(trackId));

  };


  const handlePlayNext = () => {
    dispatch(playNextTrack());
  };

  const handlePlayPrevious = () => {
    dispatch(playPreviousTrack());
  };

  const handleToggleShuffle = () => {
    dispatch(toggleShuffle());
  };

  return (
    <>
    <S.ContentPlaylist>
      {tracks.map((track) => {
        return <PlaylistItem onClick={() => handlePlaylistItemClick(track.id, track.track_file, track.author, track.name, track.duration_in_seconds)} key={track.id} track={track}/>
        
      })}
    </S.ContentPlaylist>
    {showAudioPlayer ? <AudioPlayer currentTrackUrl={currentTrackUrl} trackTime={trackTime}           onPlayNext={handlePlayNext}
          onPlayPrevious={handlePlayPrevious}
          onToggleShuffle={handleToggleShuffle}/> : null}
    </>
  )
}

export default Playlist
