// eslint-disable-next-line no-unused-vars
import React from 'react'
// import {PLAYLISTTRACK} from '../../components/constants'
import TrackListFile from '../../components/track-list'
import { usePlaylistTracks  } from '../../components/constants'

function SidebarPlaylistAll() {
  const { PLAYLISTTRACK } = usePlaylistTracks();
  return (
    <div>
<TrackListFile playlisttrack={PLAYLISTTRACK}/>
    </div>
  )
}

export { SidebarPlaylistAll }
