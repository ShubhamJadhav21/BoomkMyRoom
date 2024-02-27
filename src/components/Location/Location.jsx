import React from "react";
import style from "./Location.module.css";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
export default function Location() {
  return (
    <div className={style.location_wrapper}>
      <div className={style.search_icon}>
        <CiSearch className={style.icon} />
      </div>
      <input
        type="text"
        className={style.location_inp}
        placeholder="Search area"
      />
      <div className={style.down_arrow}>
        <SlArrowDown className={style.down_icon} />
      </div>
    </div>
  );
}
