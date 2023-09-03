import Search from './Search'
import ContentPlaylistSkeleton from './ContentPlaylistSceleton'
import FilterMenu from './FilterMunu'
import Playlist from './Playlist'
import { playlist } from './ArrayTrack'
import * as S from './MainBlock.styled'

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
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <FilterMenu />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitileCol01>Трек</S.PlaylistTitileCol01>
          <S.PlaylistTitileCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitileCol02>
          <S.PlaylistTitileCol03>АЛЬБОМ</S.PlaylistTitileCol03>
          <S.PlaylistTitileCol04>
            <S.PlaylistTitileSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitileSvg>
          </S.PlaylistTitileCol04>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {showSkeleton ? <ContentPlaylistSkeleton /> : <Playlist tracks={tracks} />}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default MainBlock
