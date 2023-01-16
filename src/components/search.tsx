/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'


const Search = () => {

    const router = useRouter();
    // initialize states
    const [search, setSearch] = useState<string>('');

    // redirect to results page on search change
    useEffect(() => {
        // redirect to results page
        search.length > 0 &&
            router.push(`/results?q=${search}`);
    }, [search]);

    return (
        <div className=' w-full h-12 bg-slate-200 flex items-center justify-center'>
            {/* */}
            search bar
        </div>
    )
}

export default Search
