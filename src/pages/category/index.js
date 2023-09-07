import { useParams } from 'react-router-dom'
import { PLAYLISTTRACK } from '../../components/constants'

import styled from 'styled-components'

const SyeltdSection = styled.section`
  color: white;
`

export const PlaylistPages = () => {
  const params = useParams()
  const list = PLAYLISTTRACK.find((list) => list.id === Number(params.id))
  return (
    <SyeltdSection>
      {/* <img src={list.img} alt="Image" /> */}
      <h1>{list.name}</h1>
      <p>id: {list.id}</p>
      <p>что: {list.text}</p>
    </SyeltdSection>
  )
}
