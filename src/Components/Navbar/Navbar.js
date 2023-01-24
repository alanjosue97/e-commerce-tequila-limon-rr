import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <div className='navbar'>
    <div className='wrapper'>
      <div className='left'></div>
      <div className='item'>
        <img src='img/en.png' alt='' />
        <KeyboardArrowDownIcon/>
      </div>
      <div className='item'>
        <span>USD</span>
        <KeyboardArrowDownIcon/>
      </div>
      <div className='item'>
       <Link to ="/products/1">Women</Link>

      </div>
      <div className='item'>
       <Link to ="/products/2">Men</Link>

      </div>
      <div className='item'>
       <Link to ="/products/3">Children</Link>

      </div>
      <div className='center'>
        <Link to ='/'>TEQUILA STORE RR</Link>
      </div>
      <div className='right'> 
      <div className='center'>
        <Link to ='/'>Home page</Link>
      </div>
      <div className='center'>
        <Link to ='/'>About</Link>
      </div>
      <div className='center'>
        <Link to ='/'>Contact</Link>
      </div>
      <div className='center'>
        <Link to ='/'>Store</Link>
      </div>
      <div className='icon'>
      <SearchIcon/>
      <PersonIcon/> 
      <FavoriteBorderIcon/>
      <div className='caricont'>
      <LocalGroceryStoreIcon/>
      <span>0</span>
      </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar