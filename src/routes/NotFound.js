// 코드 작성자: 황문실
// 파일 역할: 404 Not Found 페이지 구현

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
