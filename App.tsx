import { devOptStore } from '@/zustand/devOptStore'
import { CodeIcon } from '@assets/icons/icons'
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
import CoordinatesNotes from '@screens/CoordinateNotes/CoordinatesNotes'
import DeveloperOptions from '@screens/DeveloperOptions/DeveloperOptions'
import MMKVDataEditor, { type MMKVDataEditorParamList } from '@screens/DeveloperOptions/MMKVDataEditor'
import MMKVDataList from '@screens/DeveloperOptions/MMKVDataList'
import Explore from '@screens/Explore/Explore'
import Greeting from '@screens/Home/Greeting'
import Home from '@screens/index'
import Location from '@screens/Location'
import NotesWelcome from '@screens/Notes/NotesWelcome'
import RoutineWelcome from '@screens/Routine/RoutineWelcome'
import BackupAndRestore from '@screens/Settings/BackupAndRestore'
import BlankSettings from '@screens/Settings/BlankSettings'
import About from '@screens/Settings/Extra/About'
import ManageStorage from '@screens/Settings/ManageStorage'
import Settings from '@screens/Settings/Settings'
import TestSettings from '@screens/Settings/TestSetting'
import YourProfile from '@screens/Settings/YourProfile'
import Test from '@screens/Test'
import RandomColor from '@screens/Try/RandomColor'
import YourAge from '@screens/Try/YourAge'
import type { ConfirmCityParamList } from '@screens/Weather/ConfirmCity'
import ConfirmCity from '@screens/Weather/ConfirmCity'
import AtmPressureUnit from '@screens/Weather/Settings/AtmPressureUnit'
import DistanceUnit from '@screens/Weather/Settings/DistanceUnit'
import TempUnit from '@screens/Weather/Settings/TempUnit'
import WeatherScienceSettings from '@screens/Weather/Settings/WeatherSettings'
import WindSpeedUnit from '@screens/Weather/Settings/WindSpeedUnit'
import WeatherScreen from '@screens/Weather/Weather'
import WeatherLocation, { type WeatherLocationParamList } from '@screens/Weather/WeatherLocation'
import WeatherSearchCity, { type SearchCityParamList } from '@screens/Weather/WeatherSearchCity'
import WeatherWelcome from '@screens/Weather/WeatherWelcome'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DarkTheme, DefaultTheme } from '@utils/themes'
import type { StackNav } from '@utils/types'
import React from 'react'
import { Dimensions, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native'
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
  MMKVDataEditor: MMKVDataEditorParamList
  MMKVDataList: undefined
  TestSettings: undefined
  BlankSettings: undefined
  CoordinateNotes: undefined
  TempUnit: undefined
  DistanceUnit: undefined
  WindSpeedUnit: undefined
  AtmPressureUnit: undefined
  ManageStorage: undefined
  BackupAndRestore: undefined
  About: undefined
  YourProfile: undefined
  YourAge: undefined
  RandomColor: undefined
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
        <Stack.Screen name='Test' component={Test} options={GestureEnabled} />
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
        <Stack.Screen name='Weather' component={WeatherScreen} options={GestureEnabled} />
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
        <Stack.Screen
          name='WeatherSettings'
          component={WeatherScienceSettings}
          options={{ gestureEnabled: true, freezeOnBlur: true }}
        />
        <Stack.Screen name='DeveloperOptions' component={DeveloperOptions} options={GestureEnabled} />
        <Stack.Screen name='TestSettings' component={TestSettings} options={GestureEnabled} />
        <Stack.Screen name='BlankSettings' component={BlankSettings} options={GestureEnabled} />
        <Stack.Screen name='MMKVDataList' component={MMKVDataList} options={GestureEnabled} />
        <Stack.Screen name='MMKVDataEditor' component={MMKVDataEditor} options={GestureEnabled} />
        <Stack.Screen name='CoordinateNotes' component={CoordinatesNotes} options={GestureEnabled} />
        <Stack.Screen name='TempUnit' component={TempUnit} options={GestureEnabled} />
        <Stack.Screen name='DistanceUnit' component={DistanceUnit} options={GestureEnabled} />
        <Stack.Screen name='WindSpeedUnit' component={WindSpeedUnit} options={GestureEnabled} />
        <Stack.Screen name='AtmPressureUnit' component={AtmPressureUnit} options={GestureEnabled} />
        <Stack.Screen name='ManageStorage' component={ManageStorage} options={GestureEnabled} />
        <Stack.Screen name='BackupAndRestore' component={BackupAndRestore} options={GestureEnabled} />
        <Stack.Screen name='About' component={About} options={GestureEnabled} />
        <Stack.Screen name='YourProfile' component={YourProfile} options={GestureEnabled} />
        <Stack.Screen name='YourAge' component={YourAge} options={GestureEnabled} />
        <Stack.Screen name='RandomColor' component={RandomColor} options={GestureEnabled} />
      </Stack.Navigator>
    </>
  )
}

const FabButton = () => {
  const navigation = useNavigation<StackNav>()
  return (
    <TouchableOpacity
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        elevation: 6,
        shadowOpacity: 0.5,
      }}
      activeOpacity={0.7}
      className='absolute bottom-7 right-5 z-10 h-14 w-14 items-center justify-center rounded-full bg-accent'
      onPress={() => navigation.navigate('DeveloperOptions')}
    >
      <CodeIcon className='text-white' height={25} width={25} />
    </TouchableOpacity>
  )
}

export default App
