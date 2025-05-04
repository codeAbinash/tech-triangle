module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
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
    'react-native-reanimated/plugin',
  ],
}
