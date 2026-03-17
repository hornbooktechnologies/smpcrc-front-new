import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'templates.envytheme.com',
			},
			{
				protocol: 'https',
				hostname: 'hr-management-hbtech.s3.ap-south-1.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: 'blob.spmcrc.org',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
};

export default nextConfig;
