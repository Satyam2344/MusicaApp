// import React from 'react'

import { Route, Routes, useLocation } from "react-router-dom"
import { DisplayHome } from "./DisplayHome"
import { AlbumDisplay } from "./AlbumDisplay"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/assets"


export const Display = () => {
    const DisplayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    const bgColor = albumsData[Number(albumId)].bgColor;
    useEffect(()=>{
        if(isAlbum){
            DisplayRef.current.style.background = 'linear-gradient('+bgColor+',#121212)'
        }
        else{
            DisplayRef.current.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(52,37,221,0.7932422969187676) 68%, rgba(0,212,255,1) 100%)'
        }
    })

    return (
        <div ref={DisplayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-myDisplaomecolor text-white overflow-auto lg:w-[75%] ml-0">
            <Routes>
                <Route path="/" element= {<DisplayHome/>}/>
                <Route path="/album/:id" element= {<AlbumDisplay/>}/>
            </Routes>
        </div>
    )
}
