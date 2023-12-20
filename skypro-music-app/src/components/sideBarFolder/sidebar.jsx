import Skeleton from "../skeletFolder/skelet";
import * as S from "./sidebar.styled";
import { AuthContext } from "../../pages/authContext/AuthContext";
import React, { useContext } from "react";

export function Sidebar({ loading }) {
  const { user, logout } = useContext(AuthContext);
  console.log("User:", user);

  return (
    <div>
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
          <S.SidebarAvatar
            onClick={() => logout()}
            src="/img/outsvg.svg"
            alt="out"
          />
        </S.SidebarPersonal>
        {loading ? (
          <S.SidebarBlock>
            <S.SidebarList>
              <S.SidebarItem>
                <S.SidebarLink href="/#">
                  <Skeleton width="250px" height="150px" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink href="/#">
                  <Skeleton width="250px" height="150px" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink href="/#">
                  <Skeleton width="250px" height="150px" />
                </S.SidebarLink>
              </S.SidebarItem>
            </S.SidebarList>
          </S.SidebarBlock>
        ) : (
          <S.SidebarBlock>
            <S.SidebarList>
              <S.SidebarItem>
                <S.SidebarLink to="/category/1">
                  <S.SidebarImg
                    src="/img/playlist01.png"
                    alt="day's playlist"
                  />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/category/2">
                  <S.SidebarImg
                    src="/img/playlist02.png"
                    alt="day's playlist"
                  />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink to="/category/3">
                  <S.SidebarImg
                    src="/img/playlist03.png"
                    alt="day's playlist"
                  />
                </S.SidebarLink>
              </S.SidebarItem>
            </S.SidebarList>
          </S.SidebarBlock>
        )}
      </S.MainSidebar>
    </div>
  );
}
