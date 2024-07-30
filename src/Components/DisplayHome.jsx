// import React from 'react'

import { Navbar } from "./Navbar"
import { AlbumItem } from "./AlbumItem"
import { albumsData } from "../assets/assets"
import { songsData } from "../assets/assets"
import { SongItem } from "./SongItem"

export const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-dancing text-2xl font-extrabold">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc}
                        image={item.image} id={item.id} />))}
                </div>
            </div>

            <div className="mb-4">
                <h1 className="my-5 font-dancing text-2xl font-extrabold">Today`s Biggest Hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc}
                        image={item.image} id={item.id} />))}
                </div>
            </div>
        </>
    )
}
