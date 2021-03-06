// 코드 작성자: 황문실
// 파일 역할: Home, Detail 페이지의 레이아웃으로, '전체화면' 및 '이전으로 돌아가기'기능을 상단 nav에 추가한 페이지

import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import 'styles.css'

const Layout = () => {
  const [fullscreenOn, setFullscreenOn] = useState(false)
  const handle = useFullScreenHandle()

  const onFullScreenOn = async () => {
    await handle.enter()
    setFullscreenOn(true)
  }

  const onFullScreenOff = async () => {
    await handle.exit()
    setFullscreenOn(false)
  }

  const escExitFullScreen = () => {
    setFullscreenOn(false)
  }
  return (
    <div id="wrap" className="layout_wrap">
      <FullScreen handle={handle} className="fullscreen_style">
        <Nav
          onFullScreenOn={onFullScreenOn}
          onFullScreenOff={onFullScreenOff}
          escExitFullScreen={escExitFullScreen}
          fullscreenOn={fullscreenOn}
        />
        <div className="contents_layout">
          <Outlet />
        </div>
      </FullScreen>

      <Footer />
    </div>
  )
}

export default Layout
