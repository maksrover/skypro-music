import PlaylistItem from '../PlaylistItem/playlistItem'
import * as S from './Playlist.styled'
import {useDispatch} from 'react-redux';
import { playTrack,  } from '../../store/useAudioPlayer/AudioPlayer.slise';

const Playlist = (props) => {
  const dispatch = useDispatch();

    const handlePlaylistItemClick = (trackId) => {
    dispatch(playTrack(trackId));
  };

  return (
    <>
    <S.ContentPlaylist>
      {props.tracks.map((track) => {
        return <PlaylistItem onClick={() => handlePlaylistItemClick
        (track.id, track.track_file)} key={track.id} track={track}/>
      })}
    </S.ContentPlaylist>
    </>
  )
}

export default Playlist




