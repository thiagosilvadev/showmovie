/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['www.themoviedb.org', 'image.tmdb.org']
  }
}

module.exports = nextConfig
