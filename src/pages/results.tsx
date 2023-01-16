import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

const Results = () => {

    // initialize router
    const router = useRouter();

    // destructure query and get a value for q
    const { q } = router.query;

    // initialize  states
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);


    // fetch results on mount
    useEffect(() => {

        // fetch results from giphy api
        const fetchResults = async () => {
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${q}&limit=25&offset=0&rating=g&lang=en`);
            const data = await res.json();
            // set results state
            setResults(data.data);
            // set loading state
            setLoading(false);
        }

        // call fetchResults
        fetchResults();
    }, [q]);

    return (
        <div>Results</div>
    )
}

Results.layout = "main"

export default Results