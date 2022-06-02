
import './mainMain.scss';
import React, { useState } from 'react'
import Header from './Home/Header'
import { Routes, Route, Link } from "react-router-dom";
import Note from './Note/Note';
import WriteAdd from './Write/Write';
import HomeMain from './Home/Home';
import SearchBar from './searchBar/SearchBar';
import EachItem from './eachItem/eachItem';
import Lists from './Lists/List';
import Story from './storie/Storie';
import { data } from './data';
import FilterBtn from './Home/filterBtn';
import Login1 from './login/Login';


const allCategories = ['All', ...new Set(data.map((item)=>item.type))];

function Main() {

  let [lists1, setlists1]=useState([{
    id: 1,
    listName: 'just List',
    lists: [],
  },
])


  const [arr,setArr]=useState([])


  let [menuItems, setMenuItems]= useState(data)
  let [type, setCategories]=useState(allCategories)

  const [inputValue, SetInputValue] = useState([]);
  const [isEmpty, setIsEmpty] = useState('');

  const filterItems = (type)=>{
      if(type==="All"){
          setMenuItems(data)
          return
      }
      const newItems = data.filter((item)=>{
          return item.type===type
      })
      setMenuItems(newItems)
  }

  return (
    <div className='main'>
        <Header/>
        <Login1/>
        <Routes>
          
            <Route path='/' element={<HomeMain filterItems={filterItems} type={type} menuItems={menuItems}  arr ={arr} setArr={setArr}  />}/>
            <Route path='note' element={<Note/>}/>
            <Route  path='list' element={<Lists arr={arr} lists1={lists1} setlists1={setlists1}/>}/>
            <Route  path='story' element={<Story  empty={inputValue}/>}/>
            <Route  path='writer' element={<WriteAdd inputValue={inputValue} SetInputValue={SetInputValue} isEmpty={isEmpty} setIsEmpty={setIsEmpty} />}/>
            <Route  path='each/:id' element={<EachItem/>}/>
            {/* <Route  path='login' element={<Login1/>}/> */}
        </Routes>
        <SearchBar/>
    </div>
  )
}

export default Main