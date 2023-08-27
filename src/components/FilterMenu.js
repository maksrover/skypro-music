import { useState, useEffect } from 'react'
import { playlist } from './ArrayTrack';

function FilterMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const closeDropdown = (event) => {
      if (activeDropdown && !event.target.closest('.menu__item_button')) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener('click', closeDropdown)

    return () => {
      window.removeEventListener('click', closeDropdown)
    }
  }, [activeDropdown])

  const toggleDropdown = (menuIndex) => {
    if (activeDropdown === menuIndex) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(menuIndex)
    }
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="menu__item menu__item_button">
        <button
          className="filter__button button-author _btn-text"
          onClick={() => toggleDropdown(1)}
        >
          исполнителю
        </button>
        <div className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
          <div className='dropdown_item'>
            <ul className="dropdown_item1">
              {playlist.map((track) => (
              <li className="dropdown_el" key={track.id}>
                {track.author}
              </li>
            ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="menu__item menu__item_button">
        <button
          className="filter__button button-year _btn-text"
          onClick={() => toggleDropdown(2)}
        >
          году выпуска
        </button>
        <div className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
        <div className='dropdown_item'>
            <ul className="dropdown_item1">
            {playlist.map((track) => (
              <li className="dropdown_el" key={track.id}>
                {track.year}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="menu__item menu__item_button">
        <button
          className="filter__button button-genre _btn-text"
          onClick={() => toggleDropdown(3)}
        >
          жанру
        </button>
        <div className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`}>
        <div className='dropdown_item'>
            <ul className="dropdown_item1">
            {playlist.map((track) => (
              <li className="dropdown_el" key={track.id}>
                {track.genre}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterMenu
