import styled from 'styled-components'
import TrackListFile from '../../components/track-list'
import {PLAYLISTTRACK} from '../../components/constants'

const StyledH1 = styled.h1`
color: white;
`


export const MyPlaylist = () => {
    return(
        <div>
            <StyledH1>Мой Плейлист</StyledH1>
            <TrackListFile playlisttrack={PLAYLISTTRACK}/>
        </div>
    )
}