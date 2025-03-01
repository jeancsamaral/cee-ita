/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      "localhost",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
