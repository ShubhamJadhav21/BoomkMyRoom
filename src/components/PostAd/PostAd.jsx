import React from 'react';
import style from './PostAd.module.css';
import { useNavigate } from 'react-router-dom';

export default function PostAd() {
  const navigate = useNavigate(); // Initialize useNavigate

  function handlePostAdClick() {
    navigate('/post_ad'); // Navigate to '/post_ad' when PostAd is clicked
  }

  return (
    <div>
      <div className={style.postad} onClick={handlePostAdClick}>
        <span>post ad</span>
      </div>
      <div className={style.postad_mob}>
        <span>
         
        </span>
      </div>
    </div>
  );
}
