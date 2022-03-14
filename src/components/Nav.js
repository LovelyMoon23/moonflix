import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import 'styles.css'

const Nav = ({
  onFullScreenOn,
  onFullScreenOff,
  fullscreenOn,
  escExitFullScreen,
}) => {
  document.addEventListener('fullscreenchange', exitHandler)
  document.addEventListener('webkitfullscreenchange', exitHandler)
  document.addEventListener('mozfullscreenchange', exitHandler)
  document.addEventListener('MSFullscreenChange', exitHandler)

  function exitHandler() {
    const escKeyPress =
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement

    if (escKeyPress) {
      escExitFullScreen()
    }
  }

  return (
    <div className="nav_wrap">
      <Link to="/">
        <div className="nav_logo">MOONFLIX</div>
      </Link>
      {fullscreenOn ? (
        <div>
          <AiOutlineFullscreenExit
            onClick={onFullScreenOff}
            style={{ fontSize: '36px' }}
          />
        </div>
      ) : (
        <>
          <div>
            <AiOutlineFullscreen
              onClick={onFullScreenOn}
              style={{ fontSize: '36px' }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Nav
