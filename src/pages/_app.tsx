import MainLayout from '@/components/layouts/MainLayout'
import { AuthProvider } from '@/hooks/useAuth'
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google'

// create a poppins font
const poppins = Poppins({
  subsets:["latin"],
  weight: ['400', '500', '600', '700']
})

export default function App({ Component, pageProps }: { Component: any; pageProps: AppProps }) {
  return (
    <AuthProvider>
      <div className={poppins.className}>
        {
          Component?.layout === "main" ?
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout> :
            <Component {...pageProps} />
        }
      </div>

    </AuthProvider>
  )
}
