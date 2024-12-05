/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { Text, TextInput } from 'react-native'
import 'react-native-gesture-handler'
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated'

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
})

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TextInput.defaultProps = TextInput.defaultProps || {}
TextInput.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => App)
