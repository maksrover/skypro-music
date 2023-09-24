import PlaylistItem from '../PlaylistItem/playlistItem'
import * as S from './Playlist.styled'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTracks, playTrack, playNextTrack, playPreviousTrack, toggleShuffle } from '../../store/useAudioPlayer/AudioPlayer.slise';
import { useEffect } from 'react';


const Playlist = ({tracks}) => {
  const dispatch = useDispatch();
  // const playlist = useSelector((state) => state.audioPlayer.playlist);
  // const currentTrackIndex = useSelector((state) => state.audioPlayer.currentTrackIndex);
  // const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);
  // const isShuffle = useSelector((state) => state.audioPlayer.isShuffle);

  
  useEffect(() => {
    dispatch(setTracks(tracks));
  }, [dispatch, tracks]);

  const [showAudioPlayer, setShowAudioPlayer] = useState(null);
  const [currentTrackUrl, setCurrentTrackUrl] = useState(null);
  const [trackAuthor, setTrackAuthor] = useState(null);
  const [trackName, setTrackName] = useState(null)
  const [trackTime, settrackTime] = useState(null)

  // const handlePlaylistItemClick = (trackId,  trackUrl, author, name, trackTimer ) => {
    const handlePlaylistItemClick = (trackId,  trackUrl, author, name, trackTimer, trackIndex) => {

    setShowAudioPlayer(trackId);
    setCurrentTrackUrl(trackUrl);
    setTrackAuthor(author);
    setTrackName(name);
    settrackTime(trackTimer)
    dispatch(playTrack(trackIndex));

  };

  // const handlePlayTrack = () => {
  //   dispatch(playTrack())
  // }
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
    {showAudioPlayer ? <AudioPlayer trackAuthor={trackAuthor} trackName={trackName} currentTrackUrl={currentTrackUrl} trackTime={trackTime}           onPlayNext={handlePlayNext}
          onPlayPrevious={handlePlayPrevious}
          onToggleShuffle={handleToggleShuffle}/> : null}
    </>
  )
}

export default Playlist
