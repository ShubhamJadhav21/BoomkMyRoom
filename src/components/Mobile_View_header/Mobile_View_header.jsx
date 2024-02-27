// Mobile_View_header.js
import React from "react";
import style from "./Mobile_View_header.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import MobileSearchBar from "../MobileSearchBar/MobileSearchBar";
import SideBar from "../SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../../store/slices/sideBarSlice";

export default function Mobile_View_header() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  function handleOpenSidebar() {
    dispatch(openSidebar());
  }

  return (
    <div className={style.mobile_view_header}>
      <div className={style.top_sec}>
        <div className={style.left_sec}>
          <div className={style.menu}>
            <HiOutlineMenu
              className={style.hamburger_icon}
              onClick={handleOpenSidebar}
            />
            <div className={style.logo}>BookMyRoom</div>
          </div>
        </div>

        <div className={style.rtl_content}>
          <div className={style.area}>
            <span>India</span>
            <span>
              <HiOutlineLocationMarker className={style.location_icon} />
            </span>
          </div>
        </div>
      </div>

      <div className={style.search_bar}>
        <MobileSearchBar />
      </div>

      {isOpen && (
        <div className={style.sidebar}>
          <SideBar />
        </div>
      )}
    </div>
  );
}
