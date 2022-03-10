import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Detail from 'routes/Detail'
import Home from 'routes/Home'
import Landing from 'routes/Landing'
import Layout from 'routes/Layout'
import NotFound from 'routes/NotFound'

function App() {
  const handle = useFullScreenHandle()
  const onClick = () => {
    handle.enter()
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<Layout onClick={onClick} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
