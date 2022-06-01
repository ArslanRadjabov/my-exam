import './header.scss';
import logo from '../../imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import React from 'react'
import { Link } from 'react-router-dom';
import avatarka from '../../imgs/avatarka2.jpg'

function Header() {
  return (
    <div className='header'>
        <div>
            <Link to={'/'}><img className='logo-img' src={logo} alt="ss" /></Link>
        </div>
        <div className='navbar'>
            <Link className='icons'  to={'/'}><FontAwesomeIcon icon={faHome}/></Link>
            <Link  className='icons' to={'/note'}><FontAwesomeIcon icon={faBell}/></Link>
            <Link className='icons'  to={'/list'}><FontAwesomeIcon icon={faBookmark} /></Link>
            <Link  className='icons' to={'/story'}><FontAwesomeIcon icon={faList}/></Link>
            <Link  className='icons' to={'/writer'}><FontAwesomeIcon icon={faPenToSquare}/></Link>
        </div>
        <div>
            <Link to={'/login'}><img className='avatar' src={avatarka} alt="" /></Link>
        </div>
    </div>
  )
}

export default Header