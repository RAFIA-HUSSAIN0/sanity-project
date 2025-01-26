/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '**', // This will match any image path from the domain
            },
        ],
    },
};

export default nextConfig;
