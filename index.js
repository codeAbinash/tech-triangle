/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native'
import 'react-native-gesture-handler'
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated'
import App from './App'
import { name as appName } from './app.json'

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
})

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TextInput.defaultProps = TextInput.defaultProps || {}
TextInput.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => App)
