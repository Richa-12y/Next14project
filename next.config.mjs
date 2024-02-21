/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // 'https://unsplash.com/photos/a-person-holding-an-umbrella-in-the-rain-3kBNzM9bDyA',
      { protocol: "https", hostname: "www.pexels.com" },
    ],
  },
};

export default nextConfig;
