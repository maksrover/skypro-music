import { useEffect, useState } from 'react'
import Search from '../Search/Search'
import ContentPlaylistSkeleton from '../ContentPlaylistSceleton'
import FilterMenu from '../FilterMenu/FilterMunu'
import Playlist from '../Playlist/Playlist'
import * as S from './MainBlock.styled'
import getPlaylist from '../../api'
import {useDispatch, useSelector} from "react-redux";
import { setTracks } from '../../store/useAudioPlayer/AudioPlayer.slise'

function MainBlock({ showSkeleton }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(null)
  //  const [showSkeleton, setShowSkeleton] = useState(true)
  const [filterByName, setFilterByName] = useState([])
  const [filterByGenre, setFilterByGenre] = useState([])
  const [sortedValue, setSortedValue] = useState('default')
  const [searchValue, setSearchValue] = useState('')
  const [selectedFilters, setSelectedFilters] = useState(0);
  const [selectedFiltersGenre, setSelectedFiltersGenre] = useState(0);
  const tracks = useSelector(state => state.playlist.tracks);


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
  }

  const setFilter = (value) => {
    if (filterByName.includes(value)) {
      setFilterByName(filterByName.filter((item) => item !== value));
      setSelectedFilters(selectedFilters - 1); // Уменьшить счетчик выбранных фильтров
    } else {
      setFilterByName([...filterByName, value]);
      setSelectedFilters(selectedFilters + 1); // Увеличить счетчик выбранных фильтров
    }
  };

  const setFilterGenre = (value) => {
    if (filterByGenre.includes(value)) {
      setFilterByGenre(filterByGenre.filter((item) => item !== value))
      setSelectedFiltersGenre(selectedFiltersGenre - 1); // Уменьшить счетчик выбранных фильтров
    } else {
      setFilterByGenre([...filterByGenre, value])
      setSelectedFiltersGenre(selectedFiltersGenre + 1); // Увеличить счетчик выбранных фильтров
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
        dispatch(setTracks(track));
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
        selectedFilters={selectedFilters}
        selectedFiltersGenre={selectedFiltersGenre}
      />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitileCol01>Трек</S.PlaylistTitileCol01>
          <S.PlaylistTitileCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitileCol02>
          <S.PlaylistTitileCol03>АЛЬБОМ</S.PlaylistTitileCol03>
          <S.PlaylistTitileCol04>
            <S.PlaylistTitileSvg alt="time">
              <use xlinkHref="../img/icon/sprite.svg#icon-watch" />
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
