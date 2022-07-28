import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiDollarSign } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Login from "./Login";

function Shop() {
    const users = useSelector((state) => state.users);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return ( <
        div className = "flex flex-row mt-20 p-8 justify-center gap-x-20" >
        <
        Link to = "/" >
        <
        div className = "border-solid" > Home < /div> <
        /Link> <
        div >
        <
        img src = "https://m.media-amazon.com/images/I/71vp8Lec9JL._AC_UL480_FMwebp_QL65_.jpg"
        className = "border border-black-500 rounded-md"
        alt = "" /
        >
        <
        /div> <
        div >
        <
        h2 className = "text-4xl text-gray-800 font-bold mb-1" >
        Basic Tee 6 - Pack <
        /h2> <
        span className = "flex flex-row text-3xl mt-4" >
        <
        FiDollarSign > < /FiDollarSign>192 <
        /span> <
        div className = "flex flex-row mt-5 gap-x-8 text-3xl" >
        <
        div className = "flex flex-row text-3xl" >
        <
        AiFillStar > < /AiFillStar> <
        AiFillStar > < /AiFillStar> <
        AiFillStar > < /AiFillStar> <
        AiFillStar > < /AiFillStar> <
        AiOutlineStar > < /AiOutlineStar> <
        /div> <
        p className = "text-violet-800 text-xl font-medium" > 117 reviews < /p> <
        /div> <
        div className = "flex flex-col mt-7" >
        <
        span className = "text-xl" > Color < /span> <
        div className = "flex flex-row mt-2 gap-x-4" >
        <
        div className = "w-10 h-10 bg-blue-900 rounded-full" > < /div> <
        div className = "w-10 h-10 bg-slate-400 rounded-full" > < /div> <
        div className = "w-10 h-10 bg-slate-700 rounded-full" > < /div> <
        /div> <
        /div>

        <
        div className = "flex flex-row mt-7 mb-2 justify-between" >
        <
        span > Size < /span> <
        p className = "text-violet-800 font-medium" > Size guide < /p> <
        /div>

        <
        div className = "flex flex-col gap-y-2" >
        <
        div className = "flex flex-row gap-x-2" >
        <
        button className = "border border-black-500 w-24 h-14" > XXS < /button> <
        button className = "border border-black-500 w-24 h-14" > XS < /button> <
        button className = "border border-black-500 w-24 h-14" > S < /button> <
        button className = "border border-black-500 w-24 h-14" > M < /button> <
        /div>

        <
        div className = "flex flex-row gap-x-2" >
        <
        button className = "border border-black-500 w-24 h-14" > L < /button> <
        button className = "border border-black-500 w-24 h-14" > XL < /button> <
        button className = "border border-black-500 w-24 h-14" > XXL < /button> <
        button className = "border border-black-500 w-24 h-14" > XXXL < /button> <
        /div>

        <
        input type = "button"
        value = "Add to bag"
        className = "text-center bg-indigo-700 h-10 mt-10 rounded-md text-neutral-50" /
        >
        <
        /div> <
        /div> <
        /div>
    );
}

export default Shop;