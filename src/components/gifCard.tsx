import { Gif } from "@/@types";
import Image from "next/legacy/image";
import React from "react";

const GifCard = ({ url, title ,username}: Gif) => {
    console.log(url)
    return (
        <div className="space-y-4">
            <div className=' w-full h-80 relative  bg-gray-100 rounded-xl'>
                <Image src={url} layout="fill" alt={title}  className="rounded-xl"/>
            </div>
            <div>
                <h1 className='font-medium text-lg'>{title}</h1>
                <p className="text-gray-400">@{username}</p>
            </div>
        </div>

    )
}

export default GifCard;