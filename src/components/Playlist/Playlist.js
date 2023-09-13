// import { getPlaylist } from '../../api'
import PlaylistItem from '../PlaylistItem/playlistItem'
import * as S from './Playlist.styled'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import { useState } from 'react';
// getPlaylist().then((playlist) => console.log(playlist))

const Playlist = (props) => {
  const [currentTrackUrl, setCurrentTrackUrl] = useState(null);
  const [showAudioPlayer, setShowAudioPlayer] = useState(null);
  const [trackAuthor, setTrackAuthor] = useState(null);
  const [trackName, setTrackName] = useState(null)

  const handlePlaylistItemClick = (trackId, trackUrl, trackAuthor, trackName) => {
    setShowAudioPlayer(trackId);
    setCurrentTrackUrl(trackUrl);
    setTrackAuthor(trackAuthor);
    setTrackName(trackName)
  };

  return (
    <>
    <S.ContentPlaylist>
      {props.tracks.map((track) => {
        return <PlaylistItem onClick={() => handlePlaylistItemClick(track.id, track.track_file, track.author, track.name)} key={track.id} track={track}/>
        
      })}
    </S.ContentPlaylist>
    {showAudioPlayer ? <AudioPlayer trackAuthor={trackAuthor} trackName={trackName}/> : null}
    {currentTrackUrl && <S.Audio src={currentTrackUrl} controls autoPlay />}
    </>
  )
}

export default Playlist
