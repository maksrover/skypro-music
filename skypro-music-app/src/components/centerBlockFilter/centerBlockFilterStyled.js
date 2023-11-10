import styled from "styled-components";

export const Parent = styled.nav`
  position: relative;
`;

export const CenterblockFilter = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;

export const FilterButton = styled.nav`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  margin-right: 10px;
`;

export const FilterTitle = styled.nav`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const Author = styled.nav`
  position: fixed;
`;
export const AuthorContent = styled.nav`
  padding: 30px;
  overflow: scroll;
  background: #313131;
  border-radius: 12px;
  height: 305px;
  width: 248px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  ::-webkit-scrollbar {
    width: 4px;
    height: 0px;
    border-radius: 10px;
    background-color: #4b4949;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    width: 4px;
    height: 4px;
  }
`;
export const AutherContentYear = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  margin-left: 260px;
  ::-webkit-scrollbar {
    width: 4px;
    height: 0px;
    border-radius: 10px;
    background-color: #4b4949;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    width: 4px;
    height: 4px;
  }
`;
export const AuthorContentGenre = styled.nav`
  height: 305px;
  width: 248px;
  display: flex;
  flex-direction: column;
  gap: 63px;
  align-items: flex-start;
  justify-content: center;
  margin-left: 383px;
  position: fixed;
`;
