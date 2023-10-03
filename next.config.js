// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// module.exports = {
//   images: {
//     domains: ["i.ibb.co"], // Add the domain(s) causing the error
//   },
// };
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"], // Add the domain(s) causing the error
  },
};

module.exports = nextConfig;
