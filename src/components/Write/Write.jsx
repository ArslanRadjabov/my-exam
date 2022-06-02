import React, { useState } from 'react'
import './write.scss'
import logo from '../../imgs/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import avatarka from '../../imgs/avatar.jpg'

let count = 200;

function WriteAdd({inputValue, SetInputValue,isEmpty, setIsEmpty}){
  const onChangeHandler1 = (e) => {
    setIsEmpty(e.target.value);
    // console.log(inputVal);
};

  const publishHandler=()=>{
    SetInputValue([
      ...inputValue,{
      text: isEmpty,
      id: count 
      } 
    ])
    setIsEmpty('')
    count++
  }

  let [inputVal, setInutVal] = useState("");
  
  return (
    <div className='writeMain'>
      <div className='header-pro'>
      <div className='write-logo'><Link to={'/'}><img className='logo-img' src={logo} alt="ss" /></Link>
      <p>Drafts in arslonradjabovblog</p>
      </div>
      <div className='row-publish'>
        <button onClick={publishHandler} className='publish'>Publish</button>
        <Link  className='icons' to={'/note'}><FontAwesomeIcon icon={faBell}/></Link>
        <div>
            <img className='avatar' src={avatarka} alt="" />
        </div>
        
      </div>
      
      </div>
      <div className='inputs_sec'>
        <input  className='InputTitle'   type="text" placeholder='Title' />
        <div>
          <textarea onChange={onChangeHandler1}   value={isEmpty}  className='textare' id
          
          ="" cols="70"  rows="10" onKeyUp={(e) => console.log(e.target.value)} placeholder='Tell your story...'></textarea>

         

        </div>
      </div>
    </div>
  )
}

export default WriteAdd