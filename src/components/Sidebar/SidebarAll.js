import SidebarLogin from '../SidebarPersonal/SidebarPersonal'
import * as S from './Sidebar.styles'


function SidebarAll({onAuthButtonClick}) {
  return (
    <S.MainSidebar>
      <SidebarLogin onAuthButtonClick={onAuthButtonClick}/>
      <S.SidebarBlock>
        <S.SidebarList>

        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default SidebarAll
