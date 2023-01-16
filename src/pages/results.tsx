import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import GifCard from '@/components/gifCard';
import { Gif } from '@/@types';
import Pagination from 'react-paginate';
import LoadingSpinner from '@/components/loadingSpinner';
import Head from 'next/head';

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


    // pagination
    const [currentPage, setCurrentPage] = useState(0);
    const pageStart = currentPage * 3;
    const pageEnd = pageStart + 3;
    const currentPageData = results.slice(pageStart, pageEnd);
    const totalPages = Math.ceil(results.length / 3);

    // handling  page change during pagination
    const handlePageChange = ({ selected }: { selected: number }) => {
        if (selected === currentPage) return;
        if (selected < 0 || selected >= totalPages) return;
        setCurrentPage(selected);
    };

    // pagination

    return (
        <>
            <Head>
                <title>Giffy app | Results for {q}</title>
            </Head>
            <main className='w-full h-full flex flex-col  justify-between'>

                <div className='flex flex-col space-y-8'>
                    <h1 className='text-xl'>Results for <span className='font-semibold'>{q}</span></h1>
                    {
                        loading ? <div className='w-full h-full flex items-center justify-center'>
                            <LoadingSpinner />
                        </div> :
                            <>
                                {
                                    results.length >0 ?
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                                            {
                                                currentPageData?.map((gif: any) => (
                                                    <GifCard key={gif.id} id={gif.id} title={gif.title} username={gif.username} url={gif.images.downsized_medium.url} />
                                                ))
                                            }
                                        </div> :
                                        <div className='w-full pt-6 text-gray-500 flex items-center justify-center'>
                                            <h1 className='text-xl'>No results found for <span className='font-semibold'>{q}</span></h1>
                                        </div>
                                }

                            </>

                    }
                </div>

                {/* pagination */}
                {results.length > 3 &&
                    <Pagination
                        className="mt-2 mx-auto flex justify-center"
                        pageCount={results?.length / 3}
                        forcePage={currentPage}
                        onPageChange={({ selected }) => setCurrentPage(selected)}
                        containerClassName='pagination'
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        activeClassName='active'
                        previousClassName='previous'
                        nextClassName={`next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                        disabledClassName='disabled'
                        previousLinkClassName='previous-link'
                        nextLinkClassName='next-link'
                        breakClassName='break'
                        breakLinkClassName='break-link'
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageActive={handlePageChange}
                    />
                }


            </main>
        </>

    )
}

Results.layout = "main"

export default Results