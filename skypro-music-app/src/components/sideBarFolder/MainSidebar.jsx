import React, { useContext } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import { useThemeContext } from "../../pages/Theme/ThemeContext.jsx";
import { AuthContext } from "../../pages/authContext/AuthContext";

import * as S from "./MainSidebarStyled";

function MainSidebar() {
  const { user, logout } = useContext(AuthContext);
  const { theme } = useThemeContext();

  return (
    <S.MainSidebar theme={theme}>
      <S.SidebarPersonal>
        <S.SidebarPersonalName theme={theme}>
          {user.username}
        </S.SidebarPersonalName>
        <S.SidebarIcon theme={theme} onClick={() => logout()}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6711 16.046V14.7419C25.6711 13.2276 24.4435 12 22.9292 12H16.7419C15.2276 12 14 13.2276 14 14.7419V26.0645C14 27.5788 15.2276 28.8065 16.7419 28.8065H22.9292C24.4435 28.8065 25.6711 27.5788 25.6711 26.0645V24.6048M18.3572 20.3254H33.2963M33.2963 20.3254L30.1062 23.5155M33.2963 20.3254L30.1062 17.1353"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="20" r="19.5" stroke="white" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>

      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink to={"/category/1"}>
              <S.SidebarImg src="/img/playlist01.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>

          <S.SidebarItem>
            <S.SidebarLink to={"/category/2"}>
              <S.SidebarImg src="/img/playlist02.png" alt="100 dance hits" />
            </S.SidebarLink>
          </S.SidebarItem>

          <S.SidebarItem>
            <S.SidebarLink to={"/category/3"}>
              <S.SidebarImg src="/img/playlist03.png" alt="indi charge" />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default MainSidebar;
