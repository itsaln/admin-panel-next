/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,
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
				// destination: 'http://localhost:5000/api/:path*'
				destination: 'https://admin-panel-api-kbjw.onrender.com/api/:path*'
			},
			{
				source: '/uploads/:path*',
				// destination: 'http://localhost:5000/uploads/:path*'
				destination: 'https://admin-panel-api-kbjw.onrender.com/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
