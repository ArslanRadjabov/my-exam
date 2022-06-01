import React, { useState } from 'react'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import IconButton from '@mui/material/IconButton';

function ButtonToggle({ClickerSaver, user}) {

   const [state, setstate] = useState(false);
   
   const toggle =()=>{
       setstate(!state);
       ClickerSaver(user)
   }

  return (
    <div>
         <IconButton onClick={toggle} className='iconBtn' aria-label="delete">
                      {state ? <BookmarkAddedOutlinedIcon/> : <BookmarkAddOutlinedIcon/> }
          </IconButton>
    </div>
  )
}

export default ButtonToggle