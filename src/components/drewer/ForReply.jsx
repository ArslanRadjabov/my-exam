import React from 'react'
import './forReply.scss'
function ForReply({rels}) {
  return (
    <div className='replyingBox'>
    <p>{rels.comments}</p>
        
    </div>
  )
}

export default ForReply