// import React from 'react'

import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={()=> navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="arrowLeft" />
                    <img onClick={()=> navigate(+1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="arrowRight" />
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-pink-500 hover:to-orange-500 ... font-dancing text-[20px] px-4 py-1 rounded-3xl md:block cursor-pointer">Explore Premium</p>
                    <p className="bg-gradient-to-r from-sky-500 to-indigo-500 text-black w-10 h-10 rounded-full flex items-center justify-center">D</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-gradient-to-r from-violet-500 to-pink-400 font-dancing px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className="bg-gradient-to-r from-violet-500 to-pink-400 font-dancing px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-gradient-to-r from-violet-500 to-pink-400 font-dancing px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>

            </div>
        </>
    )
}
