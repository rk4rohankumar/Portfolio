const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode

  images: {
    domains: ["i.ibb.co", "avatars.githubusercontent.com", "ibb.co"],
  },
};

module.exports = nextConfig;
