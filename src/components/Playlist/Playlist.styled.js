import styled from 'styled-components'

export const Audio = styled.audio`
  margin-left: 300px;
`

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
  color: #b672ff;

  height: 450px;

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
