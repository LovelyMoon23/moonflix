import React from 'react'
import 'styles.css'
import { Outlet } from 'react-router-dom'
// import { handle } from 'App.js'
import { AiOutlineExpand } from 'react-icons/ai'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const Nav = ({ onClick }) => {
  return (
    <div className="nav_wrap">
      <div className="nav_logo">MOONFLIX</div>
      <AiOutlineExpand onClick={onClick} />
    </div>
  )
}

export default Nav
