// 코드 작성자: 황문실
// 파일 역할: landing페이지로 MOONFLIX의 간단한 소개 및 FAQ를 구현. 해당페이지는 전체화면을 굳이 제공하지 않도록 설계함

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AiOutlineRight,
  AiFillCaretDown,
  AiOutlineCaretUp,
} from 'react-icons/ai'
import contact from 'components/contact.png'
import 'styles.css'

const Landing = () => {
  const [faqOpened, setFaqOpened] = useState(false)
  const [clickedId, setClickedId] = useState([])

  const navigate = useNavigate()
  const goMain = () => {
    navigate('/home')
  }

  const faqData = [
    {
      key: '1',
      question: 'MOONFLIX란 무엇인가요?',
      answer:
        'MOONFLIX는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 정보를 확인하고 다운발을 수 있는 서비스입니다. ',
    },
    {
      key: '2',
      question: '데스크탑이 아닌 모바일, 테블릿도 지원하나요?',
      answer:
        '사용자의 편의에 따른 다양한 디바이스를 지원하고 있습니다. 모바일로 그리고 테블릿으로도 MOONFLIX를 즐겨보세요.',
    },
    {
      key: '3',
      question: '전체화면으로 볼 수 있나요?',
      answer:
        '모바일을 제외한 모든 디바이스에서 전체화면으로 MOONFLIX를 보다 생생하게 즐기실 수 있습니다.',
    },
  ]

  const openFaqCard = (event) => {
    const id = event.target.id
    setClickedId(id)
    setFaqOpened(!faqOpened)
  }

  return (
    <div id="wrap" className="landing_wrap">
      <div className="main_wrap">
        <div id="header" className="user_menu">
          <span className="logo">MOONFLIX</span>
          <div>
            <a href="mailto:help@moonflix.com">
              <button>문의하기</button>
              <img className="contact_icon" src={contact}></img>
            </a>
          </div>
        </div>
        <div id="content" className="story_card_wrap">
          <div className="introduction_wrap">
            <div className="introduction_card_title">
              영화정보를 무제한으로.
            </div>
            <div className="introduction_card_subtitle">
              영화를 좋아하는 당신이라면,
            </div>
            <div className="introduction_card_content">
              다양한 영화의 평점을 확인하고 줄거리를 확인할 수 있습니다.
            </div>

            <input value="함께할 준비가 되셨나요?"></input>
            <button className="go_to_main_button" onClick={goMain}>
              <span>
                자세히 보기
                <AiOutlineRight className="goto_main_arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="faq_wrap">
        <h1 className="faq_card_title">자주 묻는 질문</h1>
        <ul>
          {faqData.map((faq) => (
            <>
              <li className="faq_question">
                <button onClick={openFaqCard} id={faq.key}>
                  {faq.question}
                  {faq.key === clickedId ? (
                    <AiOutlineCaretUp className="faq_arrow_mark" />
                  ) : (
                    <AiFillCaretDown className="faq_arrow_mark" />
                  )}
                </button>
              </li>
              {faq.key === clickedId && (
                <div className="faq_answer">{faq.answer}</div>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Landing
