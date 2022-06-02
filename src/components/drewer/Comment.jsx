import React, { useState } from 'react'
import './comment.scss'
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ForReply from './ForReply';
import CommentReply from './commentReply';
function Comment({item}) {


    let [replyed, setReplyed] = useState(false)
    let [reply1, setReply1] = useState(false)
    console.log(item.reply)
  return (

    <>
    {/* {
        item.map(sug=>{
            console.log(sug);
            return(
                sug
                )
        })
    } */}

    <div className='com_main'>
        <div className='com_header'>
            <img src={item.commenterImg} alt="" />
            <p>{item.followers}</p>
        </div>
        <p>{item.comments}</p>
        <div className='com-footer'>
            <div>  
                <IconButton aria-label="delete" disabled color="primary">
                     <ThumbUpIcon/>
                </IconButton></div>
            <p onClick={() => setReplyed(!replyed)} className='reply'>Reply</p>
           
            
        </div>
        <div>
        {
                replyed ? <CommentReply setReply1={setReply1} 
                reply1={reply1} el={item.reply} /> : ""
            }
            
            {/* {
                
                item.reply.map(rel => {
                    return <ForReply   rels={rel} />
                })
            } */}
            
        </div>
        
    </div>
    
    </>



  )
}

export default Comment