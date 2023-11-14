import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const CenterBlock = styled.div`
  width: 366px;
  height: 415px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -200px -100px 0px -200px;
  background-color: #fff;
  color: black;
  border-radius: 12px;
  display: inline-flex;
`;

export const CenterBlockItem = styled.div``;

export const LogoImageItem = styled.img`
  width: 140.001px;
  height: 21px;
  color: black;
  margin: 43px 113px 42px 113px;
`;

export const InputItem = styled.input`
  width: 278.5px;
  outline: none;
  border: 0;
  margin: 0px 47px 0px 41px;
  border-bottom: 1px solid #d0cece;
  height: 24px;
  &::placeholder {
    color: #d0cece;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.054px;
  }
`;

export const ButtonEnter = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 278px;
  height: 52px;
  margin: 60px 47px 20px 41px;
  border-radius: 6px;
  background: var(--palette-purple-90, #580ea2);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  border: 0;
  &:hover {
    background: #3f007d;
  }
  &:active {
    background: var(--palette-purple-100, #271a58);
  }
`;

export const ButtonRegister = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 278px;
  height: 52px;
  margin: 0px 47px 39px 41px;
  border-radius: 6px;
  border: 1px solid #d0cece;
  background: #fff;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  &:hover {
    background: var(--palette-gray-10, #f4f5f6);
  }
  &:active {
    border: 1px solid #d0cece;
    background: #d9d9d9;
  }
`;

export const LogoImage = styled.div`
  height: 106px;
`;

export const InputBlock = styled.div`
  display: grid;
  gap: 38px;
`;

export const ButtonBlock = styled.div``;
