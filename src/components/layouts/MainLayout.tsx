import React, { use } from 'react'
import Search from '../search'
import useAuth from '@/hooks/useAuth';
import LoadingSpinner from '../loader';

interface ILayoutProps {
    children: React.ReactNode
}


const MainLayout: React.FC<ILayoutProps> = ({ children }) => {

    // grab loading state for the first time the app loads
    const { initialLoading } = useAuth();

    return (
        <div className='w-full h-screen overflow-hidden bg-white flex flex-col space-y-4 py-12 px-8'>
            {
                initialLoading ?
                    <LoadingSpinner /> :
                    <div className='space-y-5'>
                        <Search />
                        {/* main content */}
                        {children}
                    </div>
            }
        </div>
    )
}

export default MainLayout