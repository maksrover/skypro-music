import Search from '../Search/Search'
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
import FilterMenu from '../FilterMenu/FilterMunu'
import Playlist from '../Playlist/Playlist'
import { playlist } from '../ArrayTrack'
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
          {showSkeleton ? (
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



// import Search from '../Search/Search'
// import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
// import FilterMenu from '../FilterMenu/FilterMunu'
// import Playlist from '../Playlist/Playlist'
// // import { playlist } from '../ArrayTrack'
// import * as S from './MainBlock.styled'

// import { useState, useEffect } from 'react'
// function MainBlock() {
//   const [showSkeleton, setShowSkeleton] = useState(true)
//   const [tracks, setTracks] = useState([])

//   useEffect(() => {
//     // Функция для загрузки данных из API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://painassasin.online/catalog/track/all/');
//         if (!response.ok) {
//           throw new Error('Ошибка при загрузке данных');
//         }
//         const data = await response.json();
//         setTracks(data); // Устанавливаем полученные данные в состояние
//         setShowSkeleton(false);
//       } catch (error) {
//         console.error('Ошибка:', error);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchData(); // Вызываем функцию для загрузки данных
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);



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
//           {showSkeleton ? (
//             <ContentPlaylistSkeleton />
//           ) : (
//             <Playlist tracks={tracks} />
//           )}
//         </S.ContentPlaylist>
//       </S.CenterblockContent>
//     </S.MainCenterblock>
//   )
// }

// export default MainBlock
