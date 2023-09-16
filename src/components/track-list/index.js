
import styled from 'styled-components'
const StyledUserList = styled.ul`
gap: 20px;
display: flex;
flex-direction: column;
`
import { Link } from 'react-router-dom'

const TrackListFile = ({ playlisttrack }) => {
  if (!playlisttrack) {
    return <p>Loading...</p> 
  }

  return (
    <StyledUserList>
      {playlisttrack.map((list) => (
        <li key={list.id} className="UserList__list-item">
          <Link to={`/category/${list.id}`}>
            <img src={list.img} alt="Image" />
          </Link>
        </li>
      ))}
    </StyledUserList>
  )
}

export default TrackListFile
