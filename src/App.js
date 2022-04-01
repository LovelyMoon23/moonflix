// 코드 작성자: 황문실
// 파일 역할: route 역할

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from 'routes/Detail'
import Home from 'routes/Home'
import Landing from 'routes/Landing'
import Layout from 'routes/Layout'
import NotFound from 'routes/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
