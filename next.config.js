const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode

  images: {
    domains: ["i.ibb.co", "avatars.githubusercontent.com", "ibb.co","e7.pngegg.com"],
  },
};

module.exports = nextConfig;
