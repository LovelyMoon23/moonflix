// 코드 작성자: 황문실
// 파일 역할: 메인페이지의 역할로, 적어도 6점 이상의 평가를 받은 영화들 리스트를 사진과 함께 제공하는 페이지

import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import 'styles.css'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [datas, setDatas] = useState([])

  const getMovies = async () => {
    const movieList = await (
      await fetch('https://yts.mx/api/v2/list_movies.json')
    ).json()
    setLoading(false)
    setDatas(movieList.data.movies)
  }
  useEffect(() => {
    getMovies()
  }, [])

  // getMovies를 통해 받아오는 영화 정보를 아직 받아오는 중일 때, 보여줄 화면
  if (loading) {
    return (
      <div className="home_wrap">
        <div className="loading_phrase">
          <p>
            Your page is loading...
            <AiOutlineLoading3Quarters />
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="home_wrap">
      <div className="thumbnail_wrap">
        {datas.map((data) => (
          <div className="movie_list_card_wrap" key={data.id}>
            <Link to={`/movie/${data.id}`}>
              <div className="card-body">
                <p>M</p>
                <img src={data.medium_cover_image} />
              </div>
              <div className="card-footer">{data.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
