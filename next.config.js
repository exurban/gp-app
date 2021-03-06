/* eslint-disable no-undef */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: require.resolve('graphql-tag/loader'),
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  images: {
    domains: ['res.cloudinary.com', 'localhost:3000'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
