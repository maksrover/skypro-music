//TODO сделать playlist компонентом


import '../App.css'

function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">{props.titleImage}</div>
          <div className="track__title-text">
            <a className="track__title-link" href={props.titleLink}>
              {props.trackTitle} <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href={props.authorLink}>
            {props.trackAuthor}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href={props.albumLink}>
            {props.trackAlbum}
          </a>
        </div>
        <div className="track__time">
          {props.timeSvg}
          <span className="track__time-text">{props.trackTime}</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
