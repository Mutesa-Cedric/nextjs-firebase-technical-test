import React, { use } from 'react'
import Search from '../search'
import useAuth from '@/hooks/useAuth';
import LoadingSpinner from '../loadingSpinner';
import NavBar from '../navBar';

interface ILayoutProps {
    children: React.ReactNode
}


const MainLayout: React.FC<ILayoutProps> = ({ children }) => {

    // grab loading state for the first time the app loads
    const { initialLoading } = useAuth();

    return (
        <div className='w-full h-screen lg:overflow-hidden bg-white flex flex-col space-y-4 '>
            {
                initialLoading ?
                    <div className='w-full h-full flex items-center justify-center '>
                        <LoadingSpinner />
                    </div>
                    :
                    <>
                        <NavBar />
                        <div className='space-y-5  px-10 pb-3'>
                            <Search />
                            {/* main content */}
                            {children}
                        </div>
                    </>

            }
        </div>
    )
}

export default MainLayout