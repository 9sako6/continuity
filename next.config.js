/** @type {import('next').NextConfig} */

const nextConfig = {
  // If it's true, react-tooltip doesn't work correctly.
  // See: https://github.com/wwayne/react-tooltip/issues/769
  // reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
