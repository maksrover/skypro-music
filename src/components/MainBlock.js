import '../App.css'
import Search from './Search'
import ContentPlaylistSkeleton from './ContentPlaylistSceleton'
import FilterMenu from './FilterMenu'
import Playlist from './Playlist'
import { playlist } from './ArrayTrack'
import { useState, useEffect } from 'react'

function MainBlock() {
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [tracks, setTracks] = useState([])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
      setTracks(playlist)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <FilterMenu />
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          {showSkeleton ? <ContentPlaylistSkeleton /> : <Playlist tracks={tracks} />}
        </div>
      </div>
    </div>
  )
}

export default MainBlock
