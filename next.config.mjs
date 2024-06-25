// next.config.mjs
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['utfs.io']
  }
};

export default nextConfig;
