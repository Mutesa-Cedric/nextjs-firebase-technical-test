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
        search.length > 0 ?
            router.push(`/results?q=${search}`):
        router.push(`/`);
    }, [search]);

    // handle change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <div className=' w-full h-12  flex items-center justify-between space-x-4'>
            <div className="relative w-full">
                <input
                    className='py-2 pl-12 w-full outline-none rounded-md border-2 border-transparent bg-[#F2F4F8] focus:border-gray-400'
                    value={search}
                    onChange={handleChange}
                    name="search"
                    type="text" placeholder="Article name or keyword..." />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-3 left-3 w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <button className='bg-black text-white px-4 py-2 rounded-md'>Search</button>
        </div>
    )
}

export default Search
