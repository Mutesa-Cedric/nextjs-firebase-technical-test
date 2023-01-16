import React from 'react'
import Search from '../search'


interface ILayoutProps {
    children: React.ReactNode
}


const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className='w-full h-screen overflow-hidden bg-white flex flex-col space-y-4 py-12 px-8'>
            {/* search bar */}
            <Search />

            {/* main content */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainLayout