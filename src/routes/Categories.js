import React from 'react'
import { NavLink } from 'react-router-dom'

const Categories = () => {
  const categories = [
    {
      name: '드라마',
      text: 'Drama',
    },
    { name: '애니메이션', text: 'Animation' },
    { name: '코메디', text: 'Comedy' },
    { name: 'SF', text: 'Sci-Fi' },
    { name: '스릴러', text: 'Thriller' },
    { name: '액션', text: 'Action' },
    { name: '다큐', text: 'Documentary' },
  ]

  return (
    <div>
      {categories.map((c) => (
        <NavLink to={c.name === categories.name ? '/' : `/${c.text}`}>
          {c.name}
        </NavLink>
      ))}
    </div>
  )
}

export default Categories
