import styled from "styled-components";

export const Nav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
  background: ${(props) => props.theme.background};
`;

export const Logo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const LogoImg = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
`;

export const NavBurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.backgroundBurgerLine};
`;

export const NavMenu = styled.nav`
  display: block;
  visibility: visible;
  cursor: pointer;
`;
