import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

function Navbar() {
  return (
  <div className='navbar'>
    <div className='wrapper'>
      <div className='left'> 
            <div className='item'>
              <img src='img/en.png' alt='' />
              <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
              <span>USD</span>
              <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
              <Link className='link' to ="/products/1">Women</Link>
            </div>
            <div className='item'>
              <Link className='link'  to ="/products/2">Men</Link>
            </div>
            <div className='item'>
              <Link className='link'  to ="/products/3">Children</Link>
            </div>
       </div>
       <div className='center'>
        <Link className='link' to ="/">TEQUILA STORE RR</Link>
       </div> 
       <div className='right'> 
          <div className='item'>
            <Link className='link'  to ="/">Home page</Link>
          </div>
          <div className='item'>
            <Link className='link'  to ="/">About</Link>
          </div>
          <div className='item'>
            <Link className='link'  to ="/">Contact</Link>
          </div>
          <div className='item'>
            <Link className='link'  to ="/">Store</Link>
          </div>
          <div className='icon'>
            <SearchIcon/>
            <PersonIcon/> 
            <FavoriteBorderIcon/>
            <div className='carIcon'>
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