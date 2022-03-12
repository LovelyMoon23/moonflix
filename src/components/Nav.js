import React from 'react'
import 'styles.css'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const Nav = ({ onClick, fullscreenOn }) => {
  const handle = useFullScreenHandle()

  return (
    <div className="nav_wrap">
      <div className="nav_logo">MOONFLIX</div>
      {fullscreenOn ? (
        <div>
          <AiOutlineFullscreenExit
            onClick={onClick}
            style={{ fontSize: '36px' }}
          />
        </div>
      ) : (
        <>
          <div>
            <AiOutlineFullscreen
              onClick={onClick}
              style={{ fontSize: '36px' }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Nav
