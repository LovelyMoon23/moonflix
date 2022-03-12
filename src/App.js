import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
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
          <Route path="/detail" element={<Detail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
