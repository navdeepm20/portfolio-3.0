/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: ["res.cloudinary.com"],
  },
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "s3.amazonaws.com",
  //     port: "",
  //     pathname: "/my-bucket/**",
  //   },
  // ],
};

module.exports = nextConfig;
