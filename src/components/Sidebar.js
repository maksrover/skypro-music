import '../App.css'
import SidebarLogin from './SidebarPersonal'
import {SidebarPlaylistDay, SidebarPlaylistIndy, SidebarPlaylist100} from './SidebarPlaylist'


function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <SidebarLogin />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarPlaylistDay />
          <SidebarPlaylist100 />
          <SidebarPlaylistIndy />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
