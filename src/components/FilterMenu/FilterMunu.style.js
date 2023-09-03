import styled from 'styled-components'

export const CenterblockFilter = styled.div`
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
`
export const CFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const MenuItem = styled.div`
  padding: 5px 0;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  justify-content: center;
`

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #181818;
  color: white;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.button-active {
    color: #b672ff;
    border-color: #b672ff;
  }
`

export const DropdownEl = styled.li`
  color: fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  font-family: StratosSkyeng;

  &:hover {
    color: #b672ff;
    border-color: #b672ff;
    text-decoration: underline
    }

`

export const DropdownItem1 = styled.ul`
  overflow-y: scroll;
  width: 180px;
  height: 236px;
  display: flex;
  gap: 28px;
  flex-direction: column;
  cursor: pointer;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    background-color: #4b4949;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 20px transparent;
    color: #4b4949;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px #ffffff;
    border: solid 4px;
    border-radius: 14px;
  }
  
`

/**
 *
 * вот тут отсечка
 */
export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  background-color: #313131;
  margin-right: 10px;
  border-radius: 12px;

  &.active .dropdown_item {
    display: block;
    width: 248px;
    height: 305px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 24px;
    padding-top: 34px;
  }


`

export const DropdownItem = styled.div`
  display: none;
`