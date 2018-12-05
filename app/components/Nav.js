import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Nav() {
  const titles = ['Home', 'Popular', 'Battle'];
  return (
    <ul className='nav'>
      { titles.map(( title, index ) => (
        <li key={index}>
          <NavLink exact activeClassName='active' to={title === 'Home' ? '/' : `/${title.toLowerCase()}`}>{ title }</NavLink>
        </li>
      ))}
    </ul>
  )
}
