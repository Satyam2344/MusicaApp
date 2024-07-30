// import React from 'react'

import { useNavigate } from "react-router-dom"

export const AlbumItem = ({name,desc,image,id}) => {

  const navigate = useNavigate();
  console.log(id);
  return (
    <div onClick={() => navigate('/album/'+id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-red-400">
        <img className='rounded' src={image} alt="image" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}
