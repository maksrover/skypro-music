import { useState, useEffect } from 'react'
import * as S from './FilterMunu2.style'

const yearSort = [
  {
    name: "По умолчанию",
    value: "default"
  },
  {
    name: "Сначала новые",
    value: "asc"
  },
  {
    name: "Сначала старые",
    value: "desc"
  },
]

function FilterMenu({tracks, setFilter, setSortedValue, setFilterGenre}) {
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const closeDropdown = (event) => {
      if (activeDropdown && event.target.id !== `button-${activeDropdown}`) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener('click', closeDropdown)

    return () => {
      window.removeEventListener('click', closeDropdown)
    }
  }, [activeDropdown])

  const toggleDropdown = (menuIndex, event) => {
    event.stopPropagation()

    if (activeDropdown === menuIndex) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(menuIndex)
    }
  }

  return (
    <S.CenterblockFilter>
      <S.CFilterTitle>Искать по:</S.CFilterTitle>
      <S.MenuItem>
        <S.FilterButton
          id="button-1"
          className={activeDropdown === 1 ? 'button-active' : ''}
          onClick={(e) => toggleDropdown(1, e)}
        >
          исполнителю
        </S.FilterButton>
        <S.Dropdown
          id="dropdown-1"
          className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}
        >
          <S.DropdownItem className="dropdown_item">
            <S.DropdownItem1>
              {tracks.map((track) => (
                <S.DropdownEl onClick={() => setFilter(track.author)} key={track.id}>{track.author}</S.DropdownEl>
              ))}
            </S.DropdownItem1>
          </S.DropdownItem>
        </S.Dropdown>
      </S.MenuItem>

      <S.MenuItem>
        <S.FilterButton
          id="button-2"
          className={activeDropdown === 2 ? 'button-active' : ''}
          onClick={(e) => toggleDropdown(2, e)}
        >
          году выпуска
        </S.FilterButton>
        <S.Dropdown
          id="dropdown-2"
          className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}
        >
          <S.DropdownItem className="dropdown_item">
            <S.DropdownItem1>
              {yearSort.map((item, index) => (
                <S.DropdownEl onClick={() => setSortedValue(item.value)} key={index}>{item.name}</S.DropdownEl>
              ))}
            </S.DropdownItem1>
          </S.DropdownItem>
        </S.Dropdown>
      </S.MenuItem>

      <S.MenuItem>
        <S.FilterButton
          id="button-3"
          className={activeDropdown === 3 ? 'button-active' : ''}
          onClick={(e) => toggleDropdown(3, e)}
        >
          жанру
        </S.FilterButton>
        <S.Dropdown
          id="dropdown-3"
          className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`}
        >
          <S.DropdownItem className="dropdown_item">
            <S.DropdownItem1>
              {Array.from(new Set(tracks.map((track) => track.genre))).map((genre, index) => (
                <S.DropdownEl onClick={() => setFilterGenre(genre)} key={index}>{genre}</S.DropdownEl>
              ))}
            </S.DropdownItem1>
          </S.DropdownItem>
        </S.Dropdown>
      </S.MenuItem>
    </S.CenterblockFilter>
  )
}

export default FilterMenu
