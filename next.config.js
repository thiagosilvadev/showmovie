/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = withPlaiceholder({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['www.themoviedb.org', 'image.tmdb.org']
  }
})

module.exports = nextConfig
