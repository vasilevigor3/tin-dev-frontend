///** @type {import('next').NextConfig} */
module.exports = () => {
                   const rewrites = () => {
                     return [
                       {
                         source: "/api",
                         destination: "https://tin-dev-back.herokuapp.com/api/users",
                       },

                     ];
                   };
                   return {
                     rewrites
                   };
                 };

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, //TODO: remove when lint errors are fixed
  },
  typescript: {
    ignoreBuildErrors: true, //TODO: remove when type errors are fixed
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;