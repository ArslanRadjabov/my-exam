import React from 'react'
import './filterBtn.scss'
export default function FilterBtn({filterItems, type}) {
  return (
    <div className='btn-container'>
        {type.map((type)=>{
            return(
                <button key={type} className="home-btn" onClick={()=>filterItems(type)}>{type}</button>
            )
        })}
    </div>
  )
}
