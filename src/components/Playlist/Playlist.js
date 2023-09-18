import PlaylistItem from '../PlaylistItem/playlistItem'
import * as S from './Playlist.styled'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import { useState } from 'react';


const Playlist = ({tracks}) => {

  


  const [showAudioPlayer, setShowAudioPlayer] = useState(null);
  const [currentTrackUrl, setCurrentTrackUrl] = useState(null);
  const [trackAuthor, setTrackAuthor] = useState(null);
  const [trackName, setTrackName] = useState(null)
  const [trackTime, settrackTime] = useState(null)

  const handlePlaylistItemClick = (trackId,  trackUrl, author, name, trackTimer ) => {
    setShowAudioPlayer(trackId);
    setCurrentTrackUrl(trackUrl);
    setTrackAuthor(author);
    setTrackName(name);
    settrackTime(trackTimer)


  };

  return (
    <>
    <S.ContentPlaylist>
      {tracks.map((track) => {
        return <PlaylistItem onClick={() => handlePlaylistItemClick(track.id, track.track_file, track.author, track.name, track.duration_in_seconds)} key={track.id} track={track}/>
        
      })}
    </S.ContentPlaylist>
    {showAudioPlayer ? <AudioPlayer trackAuthor={trackAuthor} trackName={trackName} currentTrackUrl={currentTrackUrl} trackTime={trackTime}/> : null}
    </>
  )
}

export default Playlist
