import PlaylistItem from '../PlaylistItem/playlistItem'
import * as S from './Playlist.styled'
import { useDispatch } from 'react-redux';
import { setTracks, playTrack,  } from '../../store/useAudioPlayer/AudioPlayer.slise';

const Playlist = ({tracks}) => {
  const dispatch = useDispatch();

    const handlePlaylistItemClick = (trackId) => {
      dispatch(setTracks(tracks));
    dispatch(playTrack(trackId));
  };

  console.log(tracks);
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




