import React from 'react'
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram,
    AiFillYoutube,
  } from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function Card() {
  return (
    <div className=" container mt-6 border-solid border-slate-400 border-2">
        <div className="">
        <span className="">
            <AiFillFacebook />
        </span>
        <span className="">@abcd</span>
        </div>
        <h2 className=" ">
        1987
        </h2>
        <p className=" ">
        Followers
        </p>
        <div className=" ">
        <span>
            <RiArrowUpSFill />
        </span>
        <span>Today</span>
        </div>
    </div>
  )
}

export default Card
