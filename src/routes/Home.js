import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters, AiOutlineLike } from 'react-icons/ai'
import 'styles.css'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [datas, setDatas] = useState([])
  const getMovies = async () => {
    const movieList = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=6&sort_by=year%27`
      )
    ).json()
    setLoading(false)
    setDatas(movieList.data.movies)
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="home_wrap">
      {loading ? (
        <div className="loading_phrase">
          페이지가 로딩중 입니다 . <AiOutlineLoading3Quarters />
        </div>
      ) : (
        datas.map((data) => (
          <div className="movie_list_card_wrap">
            {data.rating > 7 && (
              <div class="card-header">
                <AiOutlineLike /> 평점 높음
              </div>
            )}
            <div class="card-body">
              <p>M</p>
              <img src={data.medium_cover_image} />
            </div>
            <div class="card-footer">{data.title}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
