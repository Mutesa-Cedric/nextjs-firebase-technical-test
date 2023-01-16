import React from 'react'
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

interface Link {
    label: string;
    href: string;
};

const links: Link[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: "Favourites",
        href: '/favourites'
    }
]

const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <div className='w-full shadow-md py-4 px-10 flex items-center justify-between'>

            {/* links */}
            <div className='flex items-center space-x-4'>
                {
                    links.map((link, index) => (
                        <Link key={index} href={link.href} >
                            <p
                                className='text-gray-800 font-medium text-lg cursor-pointer'>
                                {link.label}
                            </p>
                        </Link>
                    ))
                }
            </div>

            {/* account info & logout btn */}
            {
                user ?
                    <div className='flex items-center space-x-4'>
                        <div className="rounded-full uppercase  bg-black/75 text-white  p-2">
                            {user?.email?.slice(0, 2)}
                        </div>
                        <button onClick={logout} className="text-white bg-black/75 py-2 px-6 hover:bg-black">
                            Logout
                        </button>
                    </div> :
                    <Link href='/login'>
                        <button className="text-white bg-black/75 py-2 px-6 hover:bg-black">
                            Login
                        </button>
                    </Link>
            }

        </div>
    )
}

export default NavBar
