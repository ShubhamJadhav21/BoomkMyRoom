import React, { useState } from "react";
import style from "./MobileSearchBar.module.css";
import { CiSearch } from "react-icons/ci";

export default function MobileSearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`${style.wrapper_mob_search} ${
        isFocused ? style.focused : ""
      }`}
      onClick={handleFocus}
    >
      <div className={style.search_icon}>
        <CiSearch className={style.icon} />
      </div>
      <input
        type="text"
        className={style.mob_search_inp}
        placeholder="Search district where you want room"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}
