import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BurgerMenuList = styled.ul`
  padding: 18px 0 10px 0;
  cursor: pointer;
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled(NavLink)`
  color: ${(props) => props.theme.color};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const IconThemeSvg = styled.svg`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  stroke: ${(props) => props.theme.color};
`;
