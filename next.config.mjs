/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/marketing-agency",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
