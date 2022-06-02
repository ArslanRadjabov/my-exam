import React, { useRef, useState } from 'react'
import './drewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEllipsis } from '@fortawesome/free-solid-svg-icons'
// import component ?
import Drawer from 'react-modern-drawer'
import avatarka2 from '../../imgs/avatarka2.jpg'
//import styles ?
import 'react-modern-drawer/dist/index.css'
import DataMini from '../eachItem/dataMini'
import LikeCounter from './likeCounter'
import Comment from './Comment'

const Drewer = ({elem}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [getinputValue, SetValue] = useState(null);

    const getElement=(e)=>{
        SetValue({
            comments: e.target.value,
            commenterImg: 'https://picsum.photos/id/99/100',
            followers: '1k followers'
        })

    }

    let commentRef = useRef(null)
    const clickedFunc=()=>{
        elem.push(getinputValue)
        console.log(getinputValue);
        SetValue(null)
        commentRef.current.value=''
    }

    return (
        <>
        <div className='comment_section'>
            <LikeCounter/>
            <button className='btnComment' onClick={toggleDrawer}><FontAwesomeIcon icon={faComment}/>186</button>
            <button className='btnComment'><FontAwesomeIcon icon={faEllipsis}/></button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
                <div className='Offcanvas'>
                    <div className='canvas_input'>
                        <div className='disp-flex'>
                            <img className='avatar_img' src={avatarka2} alt="avatarka" />
                            <h3 className='titleOfsender'>Arslon Radjabov</h3>
                        </div>


                        <textarea ref={commentRef} onChange={getElement} className='inputarea'  placeholder='What are your thoughts' id="" cols="30" rows="5"></textarea>


                        <div className='sendBtnFlex' >
                        <div className='Btnsends'>
                        <button onClick={()=>commentRef.current.value=''} className='cancel'>cencel</button>
                        <button onClick={clickedFunc} className='send'>send</button>
                        </div>
                        <div>
                            <button className='fontBtn Bold'>B</button>
                            <button className='fontBtn cursive'><i>i</i></button>
                        </div>
                        
                       
                        
                        </div>
                        
                    </div>
                    <ul>
                            {
                                elem.map(item=>{
                                    return (
                                        <Comment  item={item}/>
                                    )
                                })
                            }
                        </ul>

                </div>
            </Drawer>
            </div>
        </>
    )
}

export default Drewer