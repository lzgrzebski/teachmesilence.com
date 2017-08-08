module.exports = {
  webpack: (config) => {
    if (!process.env.SOURCE_MAPS) {
      return config;
    }

    const configOptions = config;
    configOptions.devtool = 'source-map';
    configOptions.output.sourceMapFilename = '[file].map';

    // Perform customizations to config existing plugins
    for (const options of configOptions.plugins) {
      if (options instanceof webpack.optimize.UglifyJsPlugin) {
        options.sourceMap = true;
        break;
      }
    }

    return configOptions;
  },
}