import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="container min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}
