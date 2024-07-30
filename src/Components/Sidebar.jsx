// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

export const Sidebar = () => {

    const navigate = useNavigate();
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className="bg-mySidebarColor h-[15%] rounded flex flex-col justify-around">
                <div onClick={() =>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className='w-6' src={assets.home_icon} alt='home' />
                    <p className='font-dancing text-2xl font-extrabold'>Home</p>
                </div>

                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className='w-6' src={assets.search_icon} alt='search' />
                    <p className='font-dancing text-2xl font-extrabold'>Search</p>
                </div>
            </div>
            <div className='bg-mySidebarColor h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3 cursor-pointer'>
                    <img className='w-8' src={assets.stack_icon} alt='your library' /> 
                    <p className='font-dancing text-2xl font-extrabold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt='arrow'/>
                        <img className='w-5' src={assets.plus_icon} alt='plus'/>
                    </div>
                </div>
                <div className='p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 m-2 rounded font-dancing flex flex-col items-start justify-start gp-1 pl-4'>
                    <h1 className='text-2xl font-extrabold'>Create your playlist</h1>
                    <p className='font-'>Its easy to create your playlist</p>
                    <p className='px-4 py-1.5 bg-white text-[15px] rounded-full mt-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... cursor-pointer'>Create Playlist</p>
                </div>
                <div className='p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 m-2 rounded font-dancing flex flex-col items-start justify-start gp-1 pl-4 mt-2'>
                    <h1 className='text-2xl font-extrabold'>Lets Find some podcasts to follow</h1>
                    <p className='font-'>We will update you to new episodes</p>
                    <p className='px-4 py-1.5 bg-white text-[15px] rounded-full mt-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... cursor-pointer'>Browse Podcasts</p>
                </div>
            </div>
        </div>
    )
}
