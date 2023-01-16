// all utility functions for favourites

import { Gif } from "@/@types";

// get favourite gifs from local storage
const getFavouriteGifs = (): Gif[] => {
    const favouriteGifs = localStorage.getItem('favouriteGifs');
    if (favouriteGifs) {
        return JSON.parse(favouriteGifs);
    }
    return [];
}


// add to favourite gifs
const addToFavourite = (gif: Gif) => {
    const favouriteGifs = getFavouriteGifs();
    const isFavourite = favouriteGifs.find((gf: Gif) => gf.id === gif.id);
    if (isFavourite) {
        const newFavouriteGifs = favouriteGifs.filter((gf: Gif) => gf.id !== gif.id);
        localStorage.setItem('favouriteGifs', JSON.stringify(newFavouriteGifs));
        alert("gif removed from favourites")
    } else {
        favouriteGifs.push(gif);
        localStorage.setItem('favouriteGifs', JSON.stringify(favouriteGifs));
        alert("gif added to favourites")
    }
}

// check if gif is favourite
const isFavourite = (id: string): boolean => {
    const favouriteGifs = getFavouriteGifs();
    if (favouriteGifs.find((gif: Gif) => gif.id === id)) {
        return true;
    };
    return false
}


// export those utility functions
export {
    getFavouriteGifs,
    addToFavourite,
    isFavourite
}