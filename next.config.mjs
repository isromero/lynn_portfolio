/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[hash].[ext]",
          publicPath: "/_next/static/",
          outputPath: "static/",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
