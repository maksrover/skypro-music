// eslint-disable-next-line no-unused-vars
import React from 'react'
import {PLAYLISTTRACK} from '../../components/constants'
import TrackListFile from '../../components/track-list'


function SidebarPlaylistAll() {
  return (
    <div>
<TrackListFile playlisttrack={PLAYLISTTRACK}/>
    </div>
  )
}

export { SidebarPlaylistAll }
