import React from 'react'
import notfoundImg from 'components/404.png'
import 'styles.css'

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={notfoundImg} alt="Not found sign" />
    </div>
  )
}

export default NotFound
