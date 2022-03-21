import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineArrowLeft,
} from 'react-icons/ai'
import 'styles.css'

const Nav = ({
  onFullScreenOn,
  onFullScreenOff,
  fullscreenOn,
  escExitFullScreen,
}) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

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
      <div>
        <AiOutlineArrowLeft className="goback_button" onClick={goBack} />
        {fullscreenOn ? (
          <AiOutlineFullscreenExit
            className="fullscreen_icon"
            onClick={onFullScreenOff}
          />
        ) : (
          <AiOutlineFullscreen
            className="fullscreen_icon"
            onClick={onFullScreenOn}
          />
        )}
      </div>
    </div>
  )
}

export default Nav
