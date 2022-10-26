/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: ['localhost', 'cloudflare-ipfs.com']
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:5000/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
