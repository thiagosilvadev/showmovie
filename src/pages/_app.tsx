import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Inter, Poppins, Raleway } from '@next/font/google'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${raleway.variable} ${inter.variable} ${poppins.variable} font-sans`}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}
