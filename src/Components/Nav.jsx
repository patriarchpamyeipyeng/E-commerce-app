import React from 'react'
import  logo  from "/src/images/logo.svg";
import imageAvatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";

const Nav = () => {
  return (
    <div className='relative flex items-center justify-between p-4 bg-white ' >
    <img src={logo} alt="logo" style={{ width: '110px', height: '19px', display: 'block'}} />
    <div className='flex items-center gap-10 font-semibold text-gray-500 '>
      
      <h2>Collections</h2>
      <h2>Men</h2>
      <h2>Women</h2>
      <h2>About</h2>
      <h2>Contact</h2>
      </div>
      
      <aside className='flex items-center justify-end gap-8'>
      <img src={cart} alt="" style={{  height: '15px', display: 'block'}} />
<img src={imageAvatar} alt="avatar" style={{ width: '45px', height: '35px', margin: '0' , display: 'block'}} />
</aside>

<div/>
    </div>
  )
}

export default Nav
