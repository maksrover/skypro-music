import { useEffect, useState } from 'react'
import Search from '../Search/Search'
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
import FilterMenu from '../FilterMenu/FilterMunu'
import Playlist from '../Playlist/Playlist'
import * as S from './MainBlock.styled'
import getPlaylist from '../../api'

function MainBlock({ showSkeleton }) {
  const [tracks, setTracks] = useState([])
  const [error, setError] = useState(null)
  //  const [showSkeleton, setShowSkeleton] = useState(true)
  const [filterByName, setFilterByName] = useState([])
  const [filterByGenre, setFilterByGenre] = useState([])
  const [sortedValue, setSortedValue] = useState('default')
  const [searchValue, setSearchValue] = useState('')

  const filterTracks = () => {
    return tracks
      .filter((track) =>
        filterByName.length ? filterByName.includes(track.author) : track,
      )
      .filter((track) =>
        filterByGenre.length ? filterByGenre.includes(track.genre) : track,
      )
      .filter(
        (track) =>
          (searchValue
            ? track.name.toLowerCase().includes(searchValue.toLowerCase())
            : track) ||
          (searchValue
            ? track.author.toLowerCase().includes(searchValue.toLowerCase())
            : track),
      )
    // .filter((track) =>
    //   searchValue ? track.author.includes(searchValue) : track,
    // )
  }

  const setFilter = (value) => {
    if (filterByName.includes(value)) {
      setFilterByName(filterByName.filter((item) => item !== value))
    } else {
      setFilterByName([...filterByName, value])
    }
  }

  const setFilterGenre = (value) => {
    if (filterByGenre.includes(value)) {
      setFilterByGenre(filterByGenre.filter((item) => item !== value))
    } else {
      setFilterByGenre([...filterByGenre, value])
    }
  }

  const sortedByValue = (array, direction) => {
    if (direction === 'asc') {
      const sortedTracks = array.sort(
        (a, b) =>
          Date.parse(new Date(b.release_date)) -
          Date.parse(new Date(a.release_date)),
      )
      return sortedTracks
    }

    if (direction === 'desc') {
      const sortedTracks = array.sort(
        (a, b) =>
          Date.parse(new Date(a.release_date)) -
          Date.parse(new Date(b.release_date)),
      )
      return sortedTracks
    }

    if (direction === 'default') {
      return array
    }
  }

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

  return (
    <S.MainCenterblock>
      <Search setSearchValue={setSearchValue} />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <FilterMenu
        tracks={tracks}
        setSortedValue={setSortedValue}
        setFilter={setFilter}
        sortedByValue={sortedByValue}
        setFilterGenre={setFilterGenre}
      />
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
            <Playlist tracks={sortedByValue(filterTracks(), sortedValue)} />
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default MainBlock
