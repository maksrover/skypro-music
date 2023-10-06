import PlaylistItem from '../PlaylistItem/playlistItem'
import * as S from './Playlist.styled'
import { useDispatch } from 'react-redux';
import { setTracks, playTrack,  } from '../../store/useAudioPlayer/AudioPlayer.slise';
// import { useEffect } from 'react';

const Playlist = ({tracks}) => {
  const dispatch = useDispatch();

  // удалить эту логику
  // useEffect(() => {
  //   dispatch(setTracks(tracks));
  // }, [dispatch, tracks]);

    const handlePlaylistItemClick = (trackId) => {
      // тут обновить список треков
      dispatch(setTracks(tracks));
    dispatch(playTrack(trackId));
  };



  return (
    <>
    <S.ContentPlaylist>
      {tracks.map((track) => {
        return <PlaylistItem onClick={() => handlePlaylistItemClick
        (track.id, track.track_file)} key={track.id} track={track}/>
      })}
    </S.ContentPlaylist>
    </>
  )
}

export default Playlist




