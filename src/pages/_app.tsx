import MainLayout from '@/components/layouts/MainLayout'
import { AuthProvider } from '@/hooks/useAuth'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* <MainLayout> */}
        <Component {...pageProps} />
      {/* </MainLayout> */}
    </AuthProvider>

  )
}
