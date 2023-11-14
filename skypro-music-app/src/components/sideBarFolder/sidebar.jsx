import Skeleton from "../skeletFolder/skelet";
import React from "react";
import * as S from "./sidebar.styled";

export function Sidebar({ loading }) {
  return (
    <div>
      {loading ? (
        <S.MainSidebar>
          <S.SidebarPersonal>
            <S.SidebarAvatar src="/img/outsvg.svg" alt="out" />
          </S.SidebarPersonal>
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
        </S.MainSidebar>
      ) : (
        <S.MainSidebar>
          <S.SidebarPersonal to="/login">
            <S.SidebarAvatar src="/img/outsvg.svg" alt="out" />
          </S.SidebarPersonal>
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
        </S.MainSidebar>
      )}
    </div>
  );
}
