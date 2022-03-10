import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const Layout = ({ onClick }) => {
  const handle = useFullScreenHandle()
  return (
    <div id="wrap">
      <Nav onClick={onClick} />
      <FullScreen handle={handle}>
        <Outlet />
      </FullScreen>
      <Footer />
    </div>
  )
}

export default Layout
