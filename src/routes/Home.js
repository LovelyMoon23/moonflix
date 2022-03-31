import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Link } from 'react-router-dom'
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
      {loading && (
        <div className="loading_phrase">
          <p>
            Your page is loading...
            <AiOutlineLoading3Quarters />
          </p>
        </div>
      )}
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
