import { devOptStore } from '@/zustand/devOptStore'
import { Popups } from '@components/Popup'
import Press from '@components/Press'
import { AutoStatusBar } from '@components/StatusBar'
import CodeIcon from '@hugeicons/CodeIcon'
import { queryClient } from '@query/index'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, type StackNavigationOptions } from '@react-navigation/stack'
import ComputerScienceSettings from '@screens/ComputerScience/ComputerScienceSettings'
import DeveloperOptions from '@screens/DeveloperOptions/DeveloperOptions'
import MMKVDataEditor, { type MMKVDataEditorParamList } from '@screens/DeveloperOptions/MMKVDataEditor'
import MMKVDataList from '@screens/DeveloperOptions/MMKVDataList'
import Skia from '@screens/Example/Skia'
import Explore from '@screens/Explore/Explore'
import Greeting from '@screens/Home/Greeting'
import fabStyles from '@screens/Home/styles/fabStyles'
import LocationNote, { LocationNoteParamList } from '@screens/LocationNotes/LocationNote'
import LocationNotes from '@screens/LocationNotes/LocationNotes'
import LocationTags from '@screens/LocationNotes/LocationTags'
import NewLocationNote from '@screens/LocationNotes/NewLocationNote'
import LocationSpeed from '@screens/LocationSpeed/LocationSpeed'
import NotesWelcome from '@screens/Notes/NotesWelcome'
import type { ChartParamList } from '@screens/OS/Chart'
import Chart from '@screens/OS/Chart'
import FCFS from '@screens/OS/FCFS'
import SJF from '@screens/OS/SJF'
import Onboarding from '@screens/Onboarding'
import RoutineWelcome from '@screens/Routine/RoutineWelcome'
import GlobalSearch from '@screens/Search/GlobalSearch'
import EditVersion from '@screens/Settings/Admin/EditVersion'
import AllUsers from '@screens/Settings/Admin/Users/AllUsers'
import User, { type UserParamList } from '@screens/Settings/Admin/Users/User'
import AppLock from '@screens/Settings/AppLock/AppLock'
import BackupAndRestore from '@screens/Settings/BackupAndRestore'
import BlankSettings from '@screens/Settings/BlankSettings'
import type { DeviceParamList } from '@screens/Settings/Devices/Device'
import Device from '@screens/Settings/Devices/Device'
import Devices from '@screens/Settings/Devices/Devices'
import About from '@screens/Settings/Extra/About'
import ManageStorage from '@screens/Settings/ManageStorage'
import Settings from '@screens/Settings/Settings/Settings'
import UiAndComponents from '@screens/Settings/UiAndComponents'
import YourProfile from '@screens/Settings/YourProfile'
import Story from '@screens/Story/Story'
import Test from '@screens/Test'
import RandomColor from '@screens/Try/RandomColor'
import RandomPassword from '@screens/Try/RandomPassword'
import YourAge from '@screens/Try/YourAge'
import Update, { type UpdateParamList } from '@screens/Update/Update'
import type { ConfirmCityParamList } from '@screens/Weather/ConfirmCity'
import { type WeatherLocationParamList } from '@screens/Weather/WeatherLocation'
import { type SearchCityParamList } from '@screens/Weather/WeatherSearchCity'
import Login from '@screens/auth/Login'
import Signup from '@screens/auth/Signup'
import Verify, { type VerifyParamList } from '@screens/auth/Verify'
import Home from '@screens/index'
import Splash from '@screens/splash/Splash'
import { QueryClientProvider } from '@tanstack/react-query'
import { DarkTheme, DefaultTheme } from '@utils/themes'
import type { StackNav } from '@utils/types'
import React from 'react'
import { Dimensions, SafeAreaView, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'
import './src/global.css'

function App(): React.JSX.Element {
  const scheme = useColorScheme()
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className='flex-1' style={{ height: height }}>
          <AutoStatusBar scheme={scheme} />
          <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Popups />
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

const SMOOTH_ANIMATION: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  gestureResponseDistance: height,
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
        <Stack.Screen name='Splash' component={Splash} options={NO_ANIMATION} />
        <Stack.Screen name='Login' component={Login} options={GestureEnabled} />
        <Stack.Screen name='Signup' component={Signup} options={GestureEnabled} />
        <Stack.Screen name='Verify' component={Verify} options={GestureEnabled} />
        <Stack.Screen name='Home' component={Home} options={SMOOTH_ANIMATION} />
        <Stack.Screen name='Test' component={Test} options={GestureEnabled} />
        <Stack.Screen name='AllUsers' component={AllUsers} options={GestureEnabled} />
        <Stack.Screen name='Skia' component={Skia} options={GestureEnabled} />
        {/* <Stack.Screen name='Location' component={Location} /> */}
        {/* <Stack.Screen name='CompassAnimation' component={CompassAnimation} /> */}
        {/* <Stack.Screen name='ParallaxWallpaper' component={ParallaxWallpaper} /> */}
        {/* <Stack.Screen name='LevelAnimation' component={LevelAnimation} /> */}
        {/* <Stack.Screen name='StableWallpaper' component={StableWallpaper} /> */}
        {/* <Stack.Screen name='StableBox' component={StableBox} /> */}
        {/* <Stack.Screen name='HandlingGesture' component={HandlingGesture} /> */}
        {/* <Stack.Screen name='SensorAnimation' component={SensorAnimation} /> */}
        {/* <Stack.Screen name='ApplyingModifiers' component={ApplyingModifiers} /> */}
        {/* <Stack.Screen name='CustomizingAnimations' component={CustomizingAnimations} /> */}
        {/* <Stack.Screen name='Basic' component={Basic} /> */}
        {/* <Stack.Screen name='Basic' component={Basic} /> */}
        {/* <Stack.Screen name='KeyboardAnimation' component={KeyboardAnimation} /> */}
        {/* <Stack.Screen name='Animations' component={Animations} /> */}
        {/* <Stack.Screen name='DragAnimation' component={DragAnimation} /> */}
        {/* <Stack.Screen name='Weather' component={WeatherScreen} options={GestureEnabled} /> */}
        {/* <Stack.Screen name='WeatherWelcome' component={WeatherWelcome} options={IOS_BOTTOM_STYLE} /> */}
        {/* <Stack.Screen name='WeatherSearchCity' component={WeatherSearchCity} options={IOS_BOTTOM_STYLE} /> */}
        {/* <Stack.Screen name='WeatherLocation' component={WeatherLocation} options={IOS_BOTTOM_STYLE} /> */}
        <Stack.Screen name='Greeting' component={Greeting} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='Settings' component={Settings} options={GestureEnabled} />
        <Stack.Screen name='EditVersion' component={EditVersion} options={GestureEnabled} />
        <Stack.Screen name='Explore' component={Explore} />
        <Stack.Screen name='RoutineWelcome' component={RoutineWelcome} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='NotesWelcome' component={NotesWelcome} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='ComputerScienceSettings' component={ComputerScienceSettings} options={GestureEnabled} />
        {/* <Stack.Screen name='ConfirmCity' component={ConfirmCity} options={IOS_BOTTOM_STYLE} /> */}
        {/* <Stack.Screen
          name='WeatherSettings'
          component={WeatherScienceSettings}
          options={{ gestureEnabled: true, freezeOnBlur: true }}
          /> */}
        <Stack.Screen name='DeveloperOptions' component={DeveloperOptions} options={GestureEnabled} />
        <Stack.Screen name='UiAndComponents' component={UiAndComponents} options={GestureEnabled} />
        <Stack.Screen name='BlankSettings' component={BlankSettings} options={GestureEnabled} />
        <Stack.Screen name='MMKVDataList' component={MMKVDataList} options={GestureEnabled} />
        <Stack.Screen name='MMKVDataEditor' component={MMKVDataEditor} options={GestureEnabled} />
        {/* <Stack.Screen name='TempUnit' component={TempUnit} options={GestureEnabled} /> */}
        {/* <Stack.Screen name='DistanceUnit' component={DistanceUnit} options={GestureEnabled} /> */}
        {/* <Stack.Screen name='WindSpeedUnit' component={WindSpeedUnit} options={GestureEnabled} /> */}
        {/* <Stack.Screen name='AtmPressureUnit' component={AtmPressureUnit} options={GestureEnabled} /> */}
        {/* <Stack.Screen name='TimeFormatUnit' component={TimeFormatUnit} options={GestureEnabled} /> */}
        <Stack.Screen name='ManageStorage' component={ManageStorage} options={GestureEnabled} />
        <Stack.Screen name='BackupAndRestore' component={BackupAndRestore} options={GestureEnabled} />
        <Stack.Screen name='About' component={About} options={GestureEnabled} />
        <Stack.Screen name='YourProfile' component={YourProfile} options={GestureEnabled} />
        <Stack.Screen name='YourAge' component={YourAge} options={GestureEnabled} />
        <Stack.Screen name='RandomColor' component={RandomColor} options={GestureEnabled} />
        <Stack.Screen name='AppLock' component={AppLock} options={GestureEnabled} />
        <Stack.Screen name='RandomPassword' component={RandomPassword} options={GestureEnabled} />
        <Stack.Screen name='GlobalSearch' component={GlobalSearch} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='Update' component={Update} options={GestureEnabled} />
        {/* <Stack.Screen name='ForceUpdate' component={Update} options={GestureEnabled} /> */}
        <Stack.Screen name='Devices' component={Devices} options={GestureEnabled} />
        <Stack.Screen name='Device' component={Device} options={GestureEnabled} />
        <Stack.Screen
          name='Story'
          component={Story}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            gestureEnabled: true,
            gestureDirection: 'vertical',
            gestureResponseDistance: height,
          }}
        />
        <Stack.Screen name='User' component={User} options={GestureEnabled} />
        <Stack.Screen name='FCFS' component={FCFS} options={GestureEnabled} />
        <Stack.Screen name='SJF' component={SJF} options={GestureEnabled} />
        <Stack.Screen name='Chart' component={Chart} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='Onboarding' component={Onboarding} options={NO_ANIMATION} />
        <Stack.Screen name='LocationNotes' component={LocationNotes} options={GestureEnabled} />
        <Stack.Screen name='NewLocationNote' component={NewLocationNote} options={GestureEnabled} />
        <Stack.Screen name='LocationTags' component={LocationTags} options={IOS_BOTTOM_STYLE} />
        <Stack.Screen name='LocationNote' component={LocationNote} options={GestureEnabled} />
        <Stack.Screen name='LocationSpeed' component={LocationSpeed} options={GestureEnabled} />
      </Stack.Navigator>
    </>
  )
}

export type RootStackParamList = {
  LocationSpeed: undefined
  NewLocationNote: undefined
  LocationNote: LocationNoteParamList
  LocationNotes: undefined
  LocationTags: undefined
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
  // Animations: undefined
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
  UiAndComponents: undefined
  BlankSettings: undefined
  TempUnit: undefined
  DistanceUnit: undefined
  WindSpeedUnit: undefined
  AtmPressureUnit: undefined
  TimeFormatUnit: undefined
  ManageStorage: undefined
  BackupAndRestore: undefined
  About: undefined
  YourProfile: undefined
  YourAge: undefined
  RandomColor: undefined
  AppLock: undefined
  RandomPassword: undefined
  GlobalSearch: undefined
  Update: UpdateParamList
  Splash: undefined
  Login: undefined
  Signup: undefined
  Verify: VerifyParamList
  Devices: undefined
  Device: DeviceParamList
  AllUsers: undefined
  EditVersion: undefined
  Story: undefined
  User: UserParamList
  FCFS: undefined
  SJF: undefined
  Chart: ChartParamList
  Onboarding: undefined
  Skia: undefined
}

const FabButton = () => {
  const navigation = useNavigation<StackNav>()
  return (
    <Animated.View
      entering={ZoomIn.duration(200)}
      exiting={ZoomOut.duration(200)}
      className='absolute bottom-7 right-5 z-10'
    >
      <Press
        style={fabStyles.fabShadow}
        onPress={() => navigation.navigate('DeveloperOptions')}
        activeOpacity={0.9}
        activeScale={0.95}
        className='items-center justify-center rounded-full bg-accent'
      >
        <CodeIcon color={'white'} size={25} />
      </Press>
    </Animated.View>
  )
}

export default App
