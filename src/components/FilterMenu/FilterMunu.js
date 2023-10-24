import { useState, useEffect } from 'react'
import * as S from './FilterMunu2.style'

const yearSort = [
  {
    name: 'По умолчанию',
    value: 'default',
  },
  {
    name: 'Сначала новые',
    value: 'asc',
  },
  {
    name: 'Сначала старые',
    value: 'desc',
  },
]

function FilterMenu({
  tracks,
  setFilter,
  setSortedValue,
  setFilterGenre,
  selectedFilters,
  selectedFiltersGenre,
}) {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeItem, setActiveItem] = useState([])
  const [activeItemGenre, setActiveItemGenre] = useState([])
  const [activeCount, setActiveCount] = useState(0)
  const [activeItemYear, setActiveItemYear] = useState([])

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
          {selectedFilters > 0 && (
            <S.FilterCount>{selectedFilters}</S.FilterCount>
          )}
        </S.FilterButton>

        <S.Dropdown
          id="dropdown-1"
          className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}
        >
          <S.DropdownItem className="dropdown_item">
            <S.DropdownItem1>
              {Array.from(new Set(tracks.map((track) => track.author))).map(
                (author, index) => (
                  <S.DropdownEl
                    onClick={() => {
                      setFilter(author)
                      setActiveItem((prevItems) => {
                        if (prevItems.includes(index)) {
                          // Удаляем индекс элемента, если он уже активен
                          return prevItems.filter((item) => item !== index)
                        } else {
                          // Добавляем индекс к списку активных элементов
                          return [...prevItems, index]
                        }
                      })
                    }}
                    className={activeItem.includes(index) ? 'active' : ''}
                    key={index}
                  >
                    {author}
                  </S.DropdownEl>
                ),
              )}
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
          {activeCount > 0 && <S.FilterCount>{activeCount}</S.FilterCount>}
        </S.FilterButton>
        <S.Dropdown
          id="dropdown-2"
          className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}
        >
          <S.DropdownItem className="dropdown_item">
            <S.DropdownItem1>
              {yearSort.map((item, index) => (
                <S.DropdownEl
  onClick={() => {
    if (activeItemYear.includes(index)) {
      setActiveCount(0);
      setActiveItemYear([]);
    } else {
      setSortedValue(item.value);
      setActiveCount(1);
      setActiveItemYear([index]);
    }
  }}
  className={activeItemYear.length > 0 && activeItemYear[0] === index ? 'active' : ''}
  key={index}
>
  {item.name}
</S.DropdownEl>
              ))}
            </S.DropdownItem1>
          </S.DropdownItem>
        </S.Dropdown>
      </S.MenuItem>
      {/* {selectedFiltersGenre > 0 && (
            <S.FilterCount>{selectedFiltersGenre}</S.FilterCount>
          )} */}
      <S.MenuItem>
        <S.FilterButton
          id="button-3"
          className={activeDropdown === 3 ? 'button-active' : ''}
          onClick={(e) => toggleDropdown(3, e)}
        >
          жанру
          {selectedFiltersGenre > 0 && (
            <S.FilterCount>{selectedFiltersGenre}</S.FilterCount>
          )}
        </S.FilterButton>
        <S.Dropdown
          id="dropdown-3"
          className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`}
        >
          <S.DropdownItem className="dropdown_item">
            <S.DropdownItem1>
              {Array.from(new Set(tracks.map((track) => track.genre))).map(
                (genre, index) => (
                  <S.DropdownEl
                    onClick={() => {
                      setFilterGenre(genre)
                      setActiveItemGenre((prevItems) => {
                        if (prevItems.includes(index)) {
                          // Удаляем индекс элемента, если он уже активен
                          return prevItems.filter((item) => item !== index)
                        } else {
                          // Добавляем индекс к списку активных элементов
                          return [...prevItems, index]
                        }
                      })
                    }}
                    className={activeItemGenre.includes(index) ? 'active' : ''}
                    key={index}
                  >
                    {genre}
                  </S.DropdownEl>
                ),
              )}
            </S.DropdownItem1>
          </S.DropdownItem>
        </S.Dropdown>
      </S.MenuItem>
    </S.CenterblockFilter>
  )
}

export default FilterMenu
