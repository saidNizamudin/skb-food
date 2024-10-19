/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["skbfood.id"],
  },
  // output: "export",
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about-us/company",
        permanent: true,
      },
      {
        source: "/media",
        destination: "/media/press",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
