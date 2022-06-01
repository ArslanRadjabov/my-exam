import './note.scss';

import React from 'react'
import { Link } from 'react-router-dom';

function Note() {
  return (
    <div className='note'>
      <h1 className='note__text'>Notifications</h1>

      <div className='displayFlex'>
        <p>All</p>
        <p>Responses</p>
      </div>
      <hr className='hr' />
      <div className='flexContent'>
        <p>You're all caught up.</p>
        <Link className='link' to={'/'}>Your stats</Link>
      </div>
    </div>
  )
}

export default Note