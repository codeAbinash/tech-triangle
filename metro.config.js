const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
// const path = require('path')
const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [...assetExts.filter((ext) => ext !== 'svg'), 'lottie', 'css'],
    sourceExts: [...sourceExts, 'svg'],
  },
  // watchFolders: [
  //   path.resolve(__dirname, '../tech-triangle-web/zod/'),
  //   path.resolve(__dirname, '../tech-triangle-web/node_modules/'),
  // ],
}

module.exports = mergeConfig(defaultConfig, config)
