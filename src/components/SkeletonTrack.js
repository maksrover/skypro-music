function SkeletonTrack () {
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image skeleton2"></div>
            <div className="track__title-text">
              <a className="track__skeleton skeleton" href="http://">
                <span className="skeleton-text"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__skeleton skeleton" href="http://">
              <span className="skeleton-text"></span>
            </a>
          </div>
          <div className="track__album">
            <a className="track__skeleton skeleton" href="http://">
              <span className="skeleton-text"></span>
            </a>
          </div>
          <div className="track__time">
            <span className="skeleton2"></span>
            <span className="skeleton-text">00:00</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default SkeletonTrack