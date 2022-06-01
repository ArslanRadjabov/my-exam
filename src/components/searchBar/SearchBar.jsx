import React from 'react'
import './searchBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import rasm1 from '../../imgs/rasm1.jpg'
import rasm2 from '../../imgs/rasm2.jpg'
import rasm3 from '../../imgs/rasm3.jpg'

function SearchBar() {
  return (
    <div className='searchBar'>
        <button className='getBtn'>Get unlimited access</button>
        <div className='row_input'>
        <span className='lupa'>
        <FontAwesomeIcon icon={faMagnifyingGlass}/></span>
        <input className='inputSearch' type="text" placeholder='search'/>
        </div>
        <div>
          <img src={rasm1} alt="rasm1"/>
          <img src={rasm2} alt="rasm1"/>
          <img src={rasm3} alt="rasm1"/>
        </div>
    </div>
  )
}

export default SearchBar