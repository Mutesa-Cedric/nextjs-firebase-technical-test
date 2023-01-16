import LoadingSpinner from '@/components/loadingSpinner'
import useAuth from '@/hooks/useAuth'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'


const Login = () => {
    const { loading, signIn } = useAuth();

    // form data state
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // handle input chage
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // handle form submit
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signIn(formData.email, formData.password);
    }
    return (
        <>
            <Head>
                <title>Giffy app | Login</title>
            </Head>
            {/* main */}
            <main className='w-full h-screen flex items-center justify-center'>

                {/* signup page (with email and password) */}
                <div className='w-full max-w-md shadow px-4 py-6 space-y-8 rounded-md'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-4'>Login to your account</h1>
                    <form onSubmit={handleFormSubmit} className='space-y-6'>
                        <div className='space-y-2'>

                            <label htmlFor='email' className='form-label'>Email</label>
                            <input
                                value={formData.email}
                                onChange={handleInputChange}
                                type='email' name='email' id='email'
                                className='form-input' />

                        </div>

                        <div className='space-y-2'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input
                                value={formData.password}
                                onChange={handleInputChange}
                                type='password' name='password' id='password'
                                className='form-input' />
                        </div>
                        {/*  */}

                        <button disabled={loading} type='submit' className={` ${loading && "loading"} submit-btn`}>
                            {loading ? <LoadingSpinner /> : "Login"}</button>
                    </form>
                    <div className=''>
                        <p className='text-gray-500'>Don&apos;t have  an account?
                            <Link href='/signup' className='text-blue-500'>
                                <span> Signup</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login