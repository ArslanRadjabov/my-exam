import React from 'react'
import { data } from '../data'
import './home.scss';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import IconButton from '@mui/material/IconButton';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Link } from 'react-router-dom';
import FilterBtn from './filterBtn';
import ButtonToggle from './buttonToggle';
import BasicMenu from './menuBar';
import MapEmpty from '../storie/MapEmpty';
function HomeMain(props) {

  let ClickerSaver=(user)=>{
    if (props.arr.indexOf(user) !== -1) return;
    props.setArr([...props.arr, user])  
    console.log(props.arr);
  }
  return (
    <div className='dataMain'>
      <FilterBtn
      filterItems={props.filterItems} type={props.type}
      />
     <div className='data_add-BT'>
     <IconButton aria-label="delete">
          <AddCircleIcon />
     </IconButton>
      <p>Keep up with the latest in any topic</p>
     </div>
    {
      
      props.menuItems.map(user =>{
        
        if (true) {
          return(
            <>
            <div className='dataInside' key={user.id}>
            <Link className='link' to={`each/${user.id}`}>
             <div className='post-header'>
                <img className='post-avatar' src={user.avatar} alt="avatar"/>
                <p className='post-user-name'>{user.name}</p>
                <p className='post-data'>{user.data}</p>
             </div>
              <div className='post-main'>
                <div className='post-desc'>
                <h2 className='post-title'>{user.title}</h2>
                <p className='user_text'>{user.text}</p>                  
                </div>
                <div>
                  <img className='post-img' src={user.img} alt="imgPost" />
                </div>
              </div>
              </Link>
              <div className='post-footer'>
                <div className='post-footer-row'>
                <span className='post-category'>{user.type}</span>
                <p className='post-readTime'>{user.read} .</p>
                </div>
                <div className='post-footer-row'>
                <BasicMenu user={user} ClickerSaver={ClickerSaver}/>
                </div>
              </div>
            </div>
          </>
          )
        }
      })
    }
    </div>
  )
}

export default HomeMain