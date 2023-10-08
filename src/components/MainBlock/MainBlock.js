// import Search from '../Search/Search'
// import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
// import FilterMenu from '../FilterMenu/FilterMunu'
// import Playlist from '../Playlist/Playlist'
// // import { playlist } from '../ArrayTrack'
// import * as S from './MainBlock.styled'

// function MainBlock({tracks, showSkeleton, error}) {

//   return (
//     <S.MainCenterblock>
//       <Search />
//       <S.CenterblockH2>Треки</S.CenterblockH2>
//       <FilterMenu />
//       <S.CenterblockContent>
//         <S.ContentTitle>
//           <S.PlaylistTitileCol01>Трек</S.PlaylistTitileCol01>
//           <S.PlaylistTitileCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitileCol02>
//           <S.PlaylistTitileCol03>АЛЬБОМ</S.PlaylistTitileCol03>
//           <S.PlaylistTitileCol04>
//             <S.PlaylistTitileSvg alt="time">
//               <use xlinkHref="img/icon/sprite.svg#icon-watch" />
//             </S.PlaylistTitileSvg>
//           </S.PlaylistTitileCol04>
//         </S.ContentTitle>
//         <S.ContentPlaylist>
//         {/* <p>{addTodoError}</p> */}

//         {error ? (
//           <S.ErrorMessage>{error}</S.ErrorMessage>
//         ) : showSkeleton ? (
//           <ContentPlaylistSkeleton />
//         ) : (
//           <Playlist tracks={tracks} />
//         )}

//         </S.ContentPlaylist>
//       </S.CenterblockContent>
//     </S.MainCenterblock>
//   )
// }

// export default MainBlock
import { useEffect, useState } from 'react'
import Search from '../Search/Search'
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
import FilterMenu from '../FilterMenu/FilterMunu'
import Playlist from '../Playlist/Playlist'
import * as S from './MainBlock.styled'
import getPlaylist from '../../api'

function MainBlock({showSkeleton}) {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  //  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    getPlaylist()
      .then((track) => {
        setTracks(track)
        // setShowSkeleton(false)
      })
      .catch(() => {
        setError('Не удалось загрузить плейлист, попробуйте позжееееее')
        // setShowSkeleton(false)
      })
  }, [])
// console.log("треки",tracks);
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
          {error ? (
            <S.ErrorMessage>{error}</S.ErrorMessage>
          ) : showSkeleton ? (
            <ContentPlaylistSkeleton />
          ) : (
            <Playlist tracks={tracks} />
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default MainBlock
