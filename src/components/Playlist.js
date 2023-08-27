import PlaylistItem from './playlistItem';

const Playlist = (props) => {
  return (
    <div className="content__playlist playlist">
        {props.tracks.map(track=>{
            return <PlaylistItem key={track.id} track={track} />
        })}
</div>
  );
}

export default Playlist;