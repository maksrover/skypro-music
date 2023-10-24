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
  align-items: baseline;
`
export const CFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: white;
`

export const MenuItem = styled.div`
  padding: 5px 0;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  justify-content: center;
`

export const FilterCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #AD61FF;
  color: white;
  font-family: StratosSkyeng;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  // line-height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 0;
  // left: 120px;
  width: 26px;
  height: 25.5px;
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
  &.active {
    color: #b672ff;
    border-color: #b672ff;
    
`

export const DropdownItem1 = styled.ul`
  overflow-y: scroll;
  width: 180px;
  height: 236px;
  display: flex;
  gap: 28px;
  flex-direction: column;
  cursor: pointer;
  color: white;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    background-color: #4b4949;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 20px transparent;
    color: #b672ff;
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