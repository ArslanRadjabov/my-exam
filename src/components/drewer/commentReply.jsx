import './commentReply.scss'
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const CommentReply = ({el, setReply1, reply1}) => {


    // const clickedFunc=()=>{
    //     el.push(getinputValue)
    //     // console.log(getinputValue);
    //     // SetValue(null)
    //     // commentRef.current.value=''
    // }
    let [reply, setReply] = useState(null)
    
let replyedFunc = (e) => {
    console.log(e.target.value);
    setReply({
        img: "",
        comments: e.target.value,
        userName:""
    })
}

let submittedReply = () => {
    setReply1(!reply1)
    el.push(reply)
    console.log(el);
}
    return (
        <div className='commentReply'>
            <input className='replyComment' onChange={replyedFunc} type="text" placeholder='type here....' />
            <div>
            <div className='com-footer'>
            <div>  

                

                <IconButton aria-label="delete" disabled color="primary">
                     <ThumbUpIcon/>
                </IconButton></div>
            <p  className='reply' onClick={submittedReply}>submit</p>
            </div>
            </div>
        </div>
    );
}

export default CommentReply;
