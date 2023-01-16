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
        <div>

        </div>
    )
}

export default Search
