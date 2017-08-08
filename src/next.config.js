module.exports = {
  webpack: (config) => {
    config.devtool = 'inline-source-map';
    return config
  },
  sourceMaps: ({ dev }) => dev ? 'cheap-module-inline-source-map' : 'source-map'
}