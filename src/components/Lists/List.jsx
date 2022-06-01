import React from "react";
import BgGreen from "./bgGreen";
import "./lists.scss";
import ListsModal from "./ListsModal/ListsModal";
import ShowLists from "./ShowLists/ShowLists";

import { Link } from 'react-router-dom';
import rasm4 from '../../imgs/rasm4.jpg'
function Lists({ isopened , lists1, setlists1, arr}) {

  let creatListButtonStyle = {
    backgroundColor: "#0F730C",
    color: "white",
    borderRadius: "30px",
    padding: "5px 20px",
    "&:hover": {
      backgroundColor: "#0d5c0b",
    },
  };

  console.log(lists1);
  return (
    <>
      <div className="Lists">
        <div className="Lists__header">
          <h1>Your lists</h1>
          <ListsModal
            lists1={lists1}
            setlists1={setlists1}
            isopened={isopened}
            creatListButtonStyle={creatListButtonStyle}
          />
        </div>
        <div className="lists-navbar">
          <h4 className="text-category">Saved</h4>
          <h4 className="text-category">Highlights</h4>
        </div>
        <BgGreen/>
        <div className="createdLists">
          {
            arr.map((el)=>{
             
              return <>
            <Link className='link' to={`/each/${el.id}`}>
             <div className='dataInside' key={el.id}>
             <div className='post-header'>
                <img className='post-avatar' src={el.avatar} alt="avatar"/>
                <p className='post-user-name'>{el.name}</p>
                <p className='post-data'>{el.data}</p>
             </div>
              <div className='post-main'>
                <div className='post-desc'>
                <h2 className='post-title'>{el.title}</h2>
                <p>{el.text}</p>                  
                </div>
                <div>
                  <img className='post-img' src={el.img} alt="imgPost" />
                </div>
              </div>
              <div className='post-footer'>
                <div className='post-footer-row'>
                <span className='post-category'>{el.type}</span>
                <p className='post-readTime'>{el.read} .</p>
                </div>
                <div className='post-footer-row'>
                {/* <ButtonToggle user={user}  ClickerSaver={ClickerSaver}/>       */}
                </div>
              </div>
            </div>
              </Link>
              </>
            })
          }


         {lists1.map((item) =>{
            return <div className="savedList">
                <div className="savedcolumn">
                <h1>{item.listName}</h1>
                <button className="viewBtn">view list</button>
                </div>
                <div>
                  <img className="rasm4" src={rasm4} alt="rasm4" />
                </div>
              </div>
          })}
        </div>
      </div>
    </>
  );
}

export default Lists;
