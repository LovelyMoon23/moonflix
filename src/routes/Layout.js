import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import 'styles.css'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const Layout = () => {
  const [fullscreenOn, setFullscrennOn] = useState(false)
  const handle = useFullScreenHandle()

  const onClick = () => {
    handle.enter()
    setFullscrennOn(true)
  }
  return (
    <div id="wrap">
      <FullScreen handle={handle} className="fullscreen_style">
        <Nav
          onClick={onClick}
          fullscreenOn={fullscreenOn}
          setFullscrennOn={setFullscrennOn}
        />
        <Outlet />
      </FullScreen>
      <Footer />
    </div>
  )
}

export default Layout
