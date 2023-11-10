import styled from "styled-components";

export const Parent = styled.div`
  position: relative;
`;

export const CenterBlockFilter = styled.div`
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

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Author = styled.div`
  position: fixed;
`;

export const AuthorContent = styled.div`
  height: 305px;
  width: 248px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;

  &::-webkit-scrollbar {
    background-color: #ffffff;
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    width: 4px;
    height: 4px;
  }
`;

export const AuthorContentAuthor = styled.div`
  height: 305px;
  width: 248px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`;

export const AuthorContentGenre = styled.div`
  position: fixed;
  height: 305px;
  width: 248px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`;

export const AuthorContentYear = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`;

export const AuthorYear = styled.div`
  margin-left: 260px;
`;

export const AuthorGenre = styled.div`
  margin-left: 383px;
`;
