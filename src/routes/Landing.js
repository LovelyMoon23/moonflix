import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AiOutlineRight,
  AiFillCaretDown,
  AiOutlineCaretUp,
  AiOutlineComment,
} from 'react-icons/ai'
import 'styles.css'
import { configure } from '@testing-library/react'

const Landing = () => {
  const [faqOpened, setFaqOpened] = useState(false)

  const navigate = useNavigate()
  const goMain = () => {
    navigate('/home')
  }

  const faqData = [
    {
      key: '1',
      question: 'MOONFLIX란 무엇인가요?',
      answer:
        '넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. ',
      boolean: false,
    },
    {
      key: '2',
      question: '데스크탑이 아닌 모바일, 테블릿도 지원하나요?',
      answer:
        '넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. ',
      boolean: false,
    },
    {
      key: '3',
      question: '전체화면으로 볼 수 있나요?',
      answer: '답입니다',
      boolean: false,
    },
  ]

  const openFaqCard = (event) => {}

  return (
    <div id="wrap" className="landing_wrap">
      <div id="header" className="user_menu">
        <span className="logo">MOONFLIX</span>
        <div>
          <a href="mailto: help@moonflix.com" target="_blank">
            <button>문의하기</button>
          </a>
        </div>
      </div>
      <div id="content" className="story_card_wrap">
        <div className="introduction_wrap">
          <div className="introduction_card_title">
            영화정보를 무제한으로 살펴보기.
          </div>
          <div className="introduction_card_subtitle">
            영화를 좋아하는 당신이라면
          </div>
          <div className="introduction_card_content">
            영화의 장르를 확인하고 줄거리를 확인할 수 있습니다.
          </div>
          <div className="introduction_card_content">
            영화의 평점도 함께 확인해 볼 수 있습니다.
          </div>
          <input value="함께할 준비가 되셨나요?"></input>

          <button className="go_to_main_button" onClick={goMain}>
            <span>
              자세히 보기
              <AiOutlineRight
                style={{
                  backgroundColor: 'transparent',
                  fontSize: '20px',
                  margin: 0,
                }}
              />
            </span>
          </button>
        </div>

        <div className="faq_wrap">
          <h1 className="faq_card_title">자주 묻는 질문</h1>
          <ul>
            {faqData.map((faq) => (
              <>
                <li className="faq_question">
                  <button onClick={openFaqCard} id={faq.key}>
                    {faq.question}
                    {faqOpened ? (
                      <AiOutlineCaretUp
                        style={{
                          backgroundColor: 'transparent',
                        }}
                      />
                    ) : (
                      <AiFillCaretDown
                        style={{
                          backgroundColor: 'transparent',
                        }}
                      />
                    )}
                  </button>
                </li>
                {faqOpened && <div className="faq_answer"> {faq.answer}</div>}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Landing
