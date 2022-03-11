import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import 'styles.css'

const Footer = () => {
  const companyInfo = [
    { id: 1, text: 'Questions? Call 070-123-4567' },
    { id: 2, text: 'Moonflix South Korea' },
    { id: 3, text: 'Business Resgistration Number: 123-45-6789' },
    { id: 4, text: 'Representative: Moonsil Hwang' },
    {
      id: 5,
      text: 'Address: Address: Jongno-gu, Seoul, 03161 Republic of Korea',
    },
    { id: 6, text: 'FAX: 070 - 1234- 5678' },
    { id: 7, text: 'Email: help@moonflix.com' },
  ]

  const companyInfoList = companyInfo.map((data) => (
    <li id={data.id}>{data.text}</li>
  ))

  return (
    <div id="footer">
      <div className="footer_header">
        <ul>{companyInfoList}</ul>
      </div>
      <div className="footer_contents">
        <ul>
          <li>
            <a href="moon9123@gmail.com">
              <AiOutlineGithub style={{ fontSize: '52px', color: '#FFF' }} />
            </a>
          </li>
          <li>
            <a href="moon9123@gmail.com">
              <AiFillLinkedin style={{ fontSize: '52px', color: '#FFF' }} />
            </a>
          </li>
          <li>
            <a href="mailto: moon9123@gmail.com" target="_blank">
              <AiFillMail style={{ fontSize: '52px', color: '#FFF' }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
