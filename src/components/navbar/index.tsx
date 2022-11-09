import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/',
    label: 'Filmes'
  },
  {
    path: '/',
    label: 'Séries'
  }
]

export const Navbar = () => (
  <header className="py-4">
    <div className="container flex items-center justify-between mx-auto">
      <Image className="w-28" src="/logo.svg" alt="" width={120} height={50} />
      <nav className="flex items-center justify-between gap-6">
        {navLinks.map((link, index) => (
          <Link href={link.path} key={index} passHref>
            <a className="font-semibold text-dark-100 hover:text-white">
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  </header>
)
