/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:
      "mongodb+srv://abhishek9111:4l2voZ94qgIm4i3l@cluster0.pmtlxq2.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
