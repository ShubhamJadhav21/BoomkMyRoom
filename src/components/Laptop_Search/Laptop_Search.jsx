import React, { useState } from "react";
import style from "./Laptop_Search.module.css";
import { CiSearch } from "react-icons/ci";
export default function Laptop_Search() {
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };
  return (
    <div className={style.wrapper_search_lap} >
      <input
        type="text"
        className={style.lap_search_inp}
        placeholder="Search district where you want room"
       
      />
      <div className={style.lap_search_btn}>
        <CiSearch className={style.search_icon} />
      </div>
    </div>
  );
}
