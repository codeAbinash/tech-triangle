module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@icons': './src/assets/icons/src',
          '@images': './src/assets/images/src',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@query': './src/query',
          '@': './src/',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-reanimated/plugin'],
    },
  },
}
