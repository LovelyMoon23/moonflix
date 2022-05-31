// 코드 작성자: 황문실
// 파일 역할: Home을 통해 클릭한 영화의 정보(시놉시스, 개봉날짜 등) 및 영화 다운로드 가능한 상세 페이지

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

  // getMovieDetail를 통해 받아오는 영화 정보를 아직 받아오는 중일 때, 보여줄 화면
  if (loading) {
    return (
      <div className="detail_wrap">
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
    <div className="detail_wrap">
      <div className="movie_image_wrap">
        <img
          className="movie_cover_imgage"
          src={detailData.medium_cover_image}
          width="80%"
          alt="movie poster"
        />
        <button className="download_button">
          <a href={detailData.torrents[0].url}>
            Download
            <AiOutlineDownload className="movie_download_button" />
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
    </div>
  )
}

export default Detail
