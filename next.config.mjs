/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
    },
    images: {
        domains: ['www.pcgamesn.com', 'internenes.com', 'www.printablee.com'],
    },
};

export default nextConfig;
