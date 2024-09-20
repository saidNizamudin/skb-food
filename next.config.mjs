/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about-us/company",
        permanent: true, // Use true for a permanent 301 redirect
      },
    ];
  },
};

export default nextConfig;
