import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  AiOutlineLoading3Quarters,
  AiOutlineDownload,
  AiTwotoneLike,
} from 'react-icons/ai'
import 'styles.css'

const Detail = () => {
  const [loading, setLoading] = useState(true)
  const [detailData, setDetailData] = useState([])
  const { id } = useParams()
  const getMovieDetail = async () => {
    const detailInfo = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    setDetailData(detailInfo.data.movie)
    setLoading(false)
  }
  useEffect(() => {
    getMovieDetail()
  }, [])

  return (
    <div className="detail_wrap">
      {loading ? (
        <div className="loading_phrase">
          <p>
            Your page is loading...
            <AiOutlineLoading3Quarters />
          </p>
        </div>
      ) : (
        <>
          <div className="movie_image_wrap">
            <img
              src={detailData.medium_cover_image}
              width="100%"
              alt="movie poster"
            />
            <button className="download_button">
              <a href={detailData.torrents[0].url}>
                Download
                <AiOutlineDownload
                  style={{ backgroundColor: 'transparent', fontSize: '24px' }}
                />
              </a>
            </button>
          </div>

          <div className="movie_detail_contents">
            <div className="movie_detail_header">
              <h1 className="title">{detailData.title}</h1>
            </div>
            <div className="movie_detail_body">
              <ul>
                <li>{detailData.year}</li>
                <li>{detailData.genres}</li>
                <li>
                  <AiTwotoneLike /> {detailData.rating}
                </li>
                <br />
                <li>{detailData.description_full}</li>
              </ul>
            </div>
            <div className="movie_detail_footer"></div>
          </div>
        </>
      )}
    </div>
  )
}

export default Detail
