// import React from 'react'
import { albumsData, assets, songsData } from '../assets/assets';
import { Navbar } from './Navbar'
import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { PlayerContext } from "../Context/PlayerContext"

export const AlbumDisplay = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext)
    // console.log(albumData);
    return (
        <>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className='w-48 rounded' src={albumData.image} alt="album_image" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-4xl font-bold mb-4 md:text-7xl">
                        {albumData.name}
                    </h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        <b className='font-dancing'> 🎶 Musica </b>
                        👍 1,12,678 likes
                        ⏳ about 2 hr 30 mn
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Duration</p>
                <img src={assets.clock_icon} alt="clock_icon" className="m-auto w-4" />
            </div>
            <hr />
            {
                songsData.map((item, index) =>
                    <div onClick ={() => playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-4 items-center text-[#e9e5e5] hover:bg-[#ffffff2b] cursor-pointer">
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7a]">{index + 1}</b>
                            <img src={item.image} alt="" className="inline w-10 mr-5" />
                            {item.name}
                        </p>
                        <p className="text-[15px]">{albumData.name}</p>
                        <p className="text-[15px] hidden sm:block">4 days ago</p>
                        <p className="text-[15px] text-center">{item.duration}</p>

                    </div>
                )
            }
        </>
    )
}
