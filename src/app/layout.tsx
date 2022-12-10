/* eslint-disable @next/next/no-page-custom-font */
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import '@/styles/globals.css'
import Provider from './provider'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Raleway:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {
          /* @ts-expect-error Server Component */
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        }
      </body>
    </html>
  )
}
