import React from "react";
import style from "./SideBar.module.css";
import { RxCross1 } from "react-icons/rx";
import { MdOutlinePostAdd } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { RiAdvertisementFill } from "react-icons/ri";
import { closeSidebar } from "../../store/slices/sideBarSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
export default function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  function handleCloseSidebar() {
    dispatch(closeSidebar());
  }

  function handlePostAdClick() {
    navigate('/post_ad'); // Navigate to '/post_ad' when PostAd is clicked
  }

  return (
    <div className={style.wrapper_side_bar}>
      <div>
        <RxCross1 className={style.close} onClick={handleCloseSidebar}/>
      </div>
      <div className={style.heading}>BookMyRoom</div>
      <div className={style.menu}>
        <div className={style.post_ad} onClick={handlePostAdClick}> {/* Call handlePostAdClick on click */}
          <span>
            <MdOutlinePostAdd className={style.icon_ad} />
          </span>
          PostAd
        </div>
        <div className={style.my_ad}>
          <span>
           <RiAdvertisementFill className={style.ad_icon}/>
          </span>
          MyAd
        </div>
        <div className={style.about}>
          <span>
            <CiSquareInfo className={style.icon_info} />
          </span>
          About
        </div>
      </div>
    </div>
  );
}
