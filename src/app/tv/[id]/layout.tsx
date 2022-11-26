import { Footer } from '@/components/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container">
      {children} <Footer />
    </main>
  )
}
