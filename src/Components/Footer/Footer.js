import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New arrivals</span>
        </div>
      <div className='item'>
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className='item'>
        <h1>About</h1>
        <span>lorem</span>
        
      </div>
      <div className='item'>
        <h1>Contacts</h1>
        <span>Lorem</span>
      </div>
    </div>
    <div className='bottom'>
      <div className='left'>
        <div className='logo'>
          <span>Logo aqui</span>
        </div>
      
      </div>
      <div className='right'>
        <img src="img/payment.png" alt='' />
      </div>
     
    </div>
    </div>
  )
}

export default Footer