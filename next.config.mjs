/** @type {import('next').NextConfig} */
let nextConfig = {};

if (process.env.NODE_ENV !== "development") {
  nextConfig = {
    output: "export",
  };
}

export default nextConfig;
