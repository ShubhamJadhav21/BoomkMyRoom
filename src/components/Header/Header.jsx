import React from 'react'
import style from './Header.module.css'
import Navbar from '../Navbar/Navbar'
import Mobile_View_header from '../Mobile_View_header/Mobile_View_header'
export default function Header() {
  return (
    <div className={style.header_wrapper}>
      <div className={style.laptop_header}><Navbar/></div>
      <div  className={style.mobile_header} ><Mobile_View_header/></div>
      
      
    </div>
  )
}
