import PlaylistItem from './playlistItem'
import * as S from './Playlist.styled'

const Playlist = (props) => {
  return (
    <S.ContentPlaylist>
      {props.tracks.map((track) => {
        return <PlaylistItem key={track.id} track={track} />
      })}
    </S.ContentPlaylist>
  )
}

export default Playlist
