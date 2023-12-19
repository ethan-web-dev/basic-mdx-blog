/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/ethan-web-dev/basic-mdx-blog-content/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
