'use client'
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {

  const [homeIconIsClicked, setHomeIconIsClicked] = useState(false)
  const [rewardIconIsClicked, setRewardIconIsClicked] = useState(false)
  const [cardIconIsClicked, setCardIconIsClicked] = useState(false)
  const [meIconIsClicked, setMeIconIsClicked] = useState(false)

  const homeClicked = () =>{
      setHomeIconIsClicked(true)
      setRewardIconIsClicked(false)
      setCardIconIsClicked(false)
      setMeIconIsClicked(false)
  }

  const rewardClicked = () =>{
    setRewardIconIsClicked(true)
    setHomeIconIsClicked(false)
      setCardIconIsClicked(false)
      setMeIconIsClicked(false)
}

const cardClicked = () =>{
  setCardIconIsClicked(true)
  setHomeIconIsClicked(false)
      setMeIconIsClicked(false)
      setRewardIconIsClicked(false)
}

const meClicked = () =>{
  setMeIconIsClicked(true)
  setHomeIconIsClicked(false)
      setRewardIconIsClicked(false)
      setCardIconIsClicked(false)
      
}


  return (
    <div>
      <div className="fixed bottom-0 pt-4 bg-white w-full flex flex-row justify-center gap-16 h-[60px] ">
        
        <div>
          <Link href='/Main'>
        <svg
         onClick={homeClicked}
          className={homeIconIsClicked ? "w-[30px] text-[#023E8A]" : "w-[30px] text-black"}
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></path>
        </svg>
        </Link>
        </div>
        
     
      <div>
      <Link href='/Reward'>
        <svg
        onClick={rewardClicked}
          className={rewardIconIsClicked? "w-[30px] text-[#023E8A]" : "w-[30px] text-black"}
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
          ></path>
        </svg>
</Link>
</div>


<div>
  <Link href='/Card'>
        <svg
         onClick={cardClicked}
         className={cardIconIsClicked? "w-[30px] text-[#023E8A]" : "w-[30px] text-black"}
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          ></path>
        </svg>
        </Link>
        </div>

        <div>
          <Link href='/Me'>
        <svg
         onClick={meClicked}
         className={meIconIsClicked? "w-[30px] text-[#023E8A]" : "w-[30px] text-black"}
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          ></path>
        </svg>
        </Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
