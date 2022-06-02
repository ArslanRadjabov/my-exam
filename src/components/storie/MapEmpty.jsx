import { Link } from 'react-router-dom';
import React from 'react'

function MapEmpty({empty}) {
  return (
    <ul>
    {
      empty.map(item=>{
        return (
            <div className='dataInside' key={item.id}>
            <Link className='link' to={`/each/${item.id}`}>
             <div className='post-header'>
                <img className='post-avatar' src='https://picsum.photos/id/85/100' alt="avatar"/>
                <p className='post-item-name'>Allan</p>
                <p className='post-data'> 6 february 2022</p>
             </div>
              <div className='post-main'>
                <div className='post-desc'>
                <h3 className='post-title'>{item.text}</h3>
                <p className='item_text'></p>                  
                </div>
                <div>
                  <img className='post-img' src='https://source.unsplash.com/random' alt="imgPost" />
                </div>
              </div>
              </Link>
            </div>
        )
      })
    }
  </ul>
  )
}

export default MapEmpty