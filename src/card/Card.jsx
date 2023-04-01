import React from 'react'
import {  RiArrowUpSFill } from "react-icons/ri";
function Card({icon, cardClass, iconClass}) {
  return (
    <div className={cardClass}>
        <div className=" flex gap-1 items-center justify-center">
          <span className={iconClass}>
              {icon}
          </span>
          <span className=" dark:text-slate-50">@abcd</span>
        </div>
        <h2 className=" text-center font-bold text-5xl pt-6 dark:text-slate-50">
          1987
        </h2>
        <p className=" dark:text-slate-50 text-center text-md uppercase tracking-[3px] text-stone-400 pb-6">
         Followers
        </p>
        <div className=" flex gap-1 items-center justify-center text-mainGreen">
        <span>
            <RiArrowUpSFill size={22}/>
        </span>
        <span>Today</span>
        </div>
    </div>
  )
}

export default Card
