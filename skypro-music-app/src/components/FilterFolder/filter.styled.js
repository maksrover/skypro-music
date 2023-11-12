import styled from "styled-components";

export const CenterBlockFilterItemText = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 34px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #313131;
  width: 248px;
  height: 305px;
  color: #fff;
  font-size: 20px;
  line-height: 24px;
  margin-top: 50px;
  animation: ani 0.3s forwards;
  overflow-y: scroll;
`;

export const FiltersButton = styled.div`
  background-color: rgba(28, 28, 28, 0);
  color: #fff;
  outline: none;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
    text-decoration: underline;
    &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
`;
