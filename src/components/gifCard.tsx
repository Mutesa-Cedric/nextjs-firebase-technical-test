import { Gif } from "@/@types";
import useAuth from "@/hooks/useAuth";
import { addToFavourite, isFavourite } from "@/utils/favourites";
import Image from "next/legacy/image";
import React from "react";

const GifCard = (gif: Gif) => {
    const { user } = useAuth();
    // is favourite state
    const [isFav, setIsFav] = React.useState<boolean>(false);

    // check if gif is favourite
    React.useEffect(() => {
        setIsFav(isFavourite(gif.id));
    }, [gif.id]);

    // add to favourite
    const handleAddToFavourite = () => {
        if (user) {
            addToFavourite(gif);
            setIsFav(!isFav);
        }
        else {
            alert("Must be logged in to do this action")
        }

    }

    return (
        <div className="space-y-4 relative">
            <div className=' w-full h-80 relative  bg-gray-100 rounded-xl'>
                <Image src={gif.url} layout="fill" alt={gif.title} className="rounded-xl" />
            </div>
            <div>
                <h1 className='font-medium text-lg'>{gif.title}</h1>
                <p className="text-gray-400">{gif.username ? `@${gif.username}` : 'no username provided'}</p>
            </div>

            {/* add to favourite */}
            <div className="absolute -top-2 right-2">
                <button onClick={handleAddToFavourite} className={`${isFav ? "bg-red-400" : "bg-black/75"} text-white p-1 rounded-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default GifCard;