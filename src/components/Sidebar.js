import '../App.css'
import SidebarLogin from './SidebarPersonal'
import {SidebarPlaylistDay, SidebarPlaylistIndy, SidebarPlaylist100} from './SidebarPlaylist'


function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      {/* <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div> */}
      <SidebarLogin />
      <div className="sidebar__block">
        <div className="sidebar__list">
          {/* <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div> */}
          <SidebarPlaylistDay />
          {/* <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div> */}
          <SidebarPlaylist100 />
          {/* <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div> */}
          <SidebarPlaylistIndy />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
