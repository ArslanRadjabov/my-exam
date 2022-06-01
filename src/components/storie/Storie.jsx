import React from 'react'
import { Link } from 'react-router-dom';
import './storie.scss';
import BasicTabs from './TabList';

function Story() {
  return (
    <div className='storyMain'>
      <div className='storyPad'>
      <h1 className='titleOfstory'>Your stories</h1>
      <div className='displayBtn'>
        <Link to={'/writer'}><button className='greenBTn'>Write a story</button></Link>
        <Link to={'/'}><button className='importBTn'>Import a story</button></Link>
      </div>
      </div>

      <BasicTabs/>
    </div>  
  )
}

export default Story