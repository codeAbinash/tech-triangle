const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { withNativeWind } = require('nativewind/metro')
// const path = require('path')
const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [...assetExts.filter((ext) => ext !== 'svg'), 'lottie'],
    sourceExts: [...sourceExts, 'svg', 'sql'],
  },
})

module.exports = withNativeWind(config, { input: './global.css' })
