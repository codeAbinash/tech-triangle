import { devOptStore } from '@/zustand/devOptStore'
import { CodeIcon } from '@assets/icons/icons'
import Press from '@components/Press'
import { AutoStatusBar } from '@components/StatusBar'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, type StackNavigationOptions } from '@react-navigation/stack'
import Animations from '@screens/Animations'
import ApplyingModifiers from '@screens/animations/ApplyingModifiers'
import Basic from '@screens/animations/Basic'
import CompassAnimation from '@screens/animations/CompassAnimation'
import CustomizingAnimations from '@screens/animations/CustomizingAnimations'
import DragAnimation from '@screens/animations/DragAnimation'
import HandlingGesture from '@screens/animations/HandlingGesture'
import KeyboardAnimation from '@screens/animations/KeyboardAnimation'
import LevelAnimation from '@screens/animations/LevelAnimation'
import ParallaxWallpaper from '@screens/animations/ParallaxWallpaper'
import SensorAnimation from '@screens/animations/SensorAnimation'
import StableBox from '@screens/animations/StableBox'
import StableWallpaper from '@screens/animations/StableWallpaper'
import ComputerScienceSettings from '@screens/ComputerScience/ComputerScienceSettings'
import DeveloperOptions from '@screens/DeveloperOptions/DeveloperOptions'
import Explore from '@screens/Explore/Explore'
import Greeting from '@screens/Home/Greeting'
import Home from '@screens/index'
import Location from '@screens/Location'
import NotesWelcome from '@screens/Notes/NotesWelcome'
import RoutineWelcome from '@screens/Routine/RoutineWelcome'
import BlankSettings from '@screens/settings/BlankSetings'
import Settings from '@screens/settings/Settings'
import TestSettings from '@screens/settings/TestSetting'
import Test from '@screens/Test'
import type { ConfirmCityParamList } from '@screens/Weather/ConfirmCity'
import ConfirmCity from '@screens/Weather/ConfirmCity'
import Weather from '@screens/Weather/Weather'
import WeatherLocation, { type WeatherLocationParamList } from '@screens/Weather/WeatherLocation'
import WeatherSearchCity, { type SearchCityParamList } from '@screens/Weather/WeatherSearchCity'
import WeatherScienceSettings from '@screens/Weather/WeatherSettings'
import WeatherWelcome from '@screens/Weather/WeatherWelcome'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DarkTheme, DefaultTheme } from '@utils/themes'
import type { StackNav } from '@utils/types'
import React from 'react'
import { Dimensions, SafeAreaView, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const queryClient = new QueryClient()

function App(): React.JSX.Element {
  const scheme = useColorScheme()
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className='flex-1' style={{ height: height }}>
          <AutoStatusBar scheme={scheme} />
          <NavigationContainer theme={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}>
            <Navigation />
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

const { width, height } = Dimensions.get('window')

const IOS_BOTTOM_STYLE: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
  gestureEnabled: true,
  gestureDirection: 'vertical',
  gestureResponseDistance: height,
}

const NO_ANIMATION: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
}

export type RootStackParamList = {
  Home: undefined
  Location: undefined
  Test: undefined
  CompassAnimation: undefined
  ParallaxWallpaper: undefined
  LevelAnimation: undefined
  StableWallpaper: undefined
  StableBox: undefined
  HandlingGesture: undefined
  SensorAnimation: undefined
  ApplyingModifiers: undefined
  CustomizingAnimations: undefined
  Basic: undefined
  KeyboardAnimation: undefined
  Animations: undefined
  DragAnimation: undefined
  Weather: undefined
  WeatherWelcome: undefined
  WeatherSearchCity: SearchCityParamList
  WeatherLocation: WeatherLocationParamList
  Greeting: undefined
  Settings: undefined
  Explore: undefined
  RoutineWelcome: undefined
  NotesWelcome: undefined
  ConfirmCity: ConfirmCityParamList
  ComputerScienceSettings: undefined
  WeatherSettings: undefined
  DeveloperOptions: undefined
  MMKVDataEditor: undefined
  TestSettings: undefined
  BlankSettings: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const GestureEnabled = { gestureEnabled: true }

function Navigation() {
  const isFabEnabled = devOptStore((state) => state.isFabEnabled)
  return (
    <>
      {isFabEnabled && <FabButton />}
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          gestureDirection: 'horizontal',
          gestureResponseDistance: width,
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Test' component={Test} />
        <Stack.Screen name='Location' component={Location} />
        <Stack.Screen name='CompassAnimation' component={CompassAnimation} />
        <Stack.Screen name='ParallaxWallpaper' component={ParallaxWallpaper} />
        <Stack.Screen name='LevelAnimation' component={LevelAnimation} />
        <Stack.Screen name='StableWallpaper' component={StableWallpaper} />
        <Stack.Screen name='StableBox' component={StableBox} />
        <Stack.Screen name='HandlingGesture' component={HandlingGesture} />
        <Stack.Screen name='SensorAnimation' component={SensorAnimation} />
        <Stack.Screen name='ApplyingModifiers' component={ApplyingModifiers} />
        <Stack.Screen name='CustomizingAnimations' component={CustomizingAnimations} />
        {/* <Stack.Screen name='Basic' component={Basic} /> */}
        <Stack.Screen name='Basic' component={Basic} />
        <Stack.Screen name='KeyboardAnimation' component={KeyboardAnimation} />
        <Stack.Screen name='Animations' component={Animations} />
        <Stack.Screen name='DragAnimation' component={DragAnimation} />
        <Stack.Screen name='Weather' component={Weather} options={GestureEnabled} />
        <Stack.Screen name='WeatherWelcome' component={WeatherWelcome} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='WeatherSearchCity' component={WeatherSearchCity} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='WeatherLocation' component={WeatherLocation} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='Greeting' component={Greeting} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='Settings' component={Settings} options={GestureEnabled} />
        <Stack.Screen name='Explore' component={Explore} />
        <Stack.Screen name='RoutineWelcome' component={RoutineWelcome} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='NotesWelcome' component={NotesWelcome} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='ConfirmCity' component={ConfirmCity} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='ComputerScienceSettings' component={ComputerScienceSettings} options={GestureEnabled} />
        <Stack.Screen name='WeatherSettings' component={WeatherScienceSettings} options={{ gestureEnabled: true, freezeOnBlur: true }} />
        <Stack.Screen name='DeveloperOptions' component={DeveloperOptions} options={GestureEnabled} />
        <Stack.Screen name='TestSettings' component={TestSettings} options={GestureEnabled} />
        <Stack.Screen name='BlankSettings' component={BlankSettings} options={GestureEnabled} />
      </Stack.Navigator>
    </>
  )
}

const FabButton = () => {
  const navigation = useNavigation<StackNav>()
  return (
    <Press
      activeOpacity={0.7}
      activeScale={0.95}
      className='absolute bottom-7 right-5 z-10 h-14 w-14 items-center justify-center rounded-full bg-accent'
      onPress={() => navigation.navigate('DeveloperOptions')}
    >
      <CodeIcon className='text-white' height={25} width={25} />
    </Press>
  )
}

export default App
