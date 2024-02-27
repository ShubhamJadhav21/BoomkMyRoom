import React from 'react'
import Laptop_Search from '../Laptop_Search/Laptop_Search'
import style from './Navbar.module.css'
import PostAd from '../PostAd/PostAd'
import Location from '../Location/Location'

export default function Navbar() {
  
  return (
    <div className={style.navbar_wrapper}>
      <div className={style.left_content}>
      <div className={style.logo}>RoomDekkho</div>
      <div><Location/></div>
      <Laptop_Search/>
      </div>
      <div className={style.right_content}>
        <div className={style.about}>About</div>
       <div className={style.post_ad}><PostAd/></div>
      </div>
     
    </div>
  )
}
