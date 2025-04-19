/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      "localhost",
      'img.youtube.com',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'secure.notion-static.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "secure.notion-static.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
