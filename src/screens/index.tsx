import {
  Home01Icon,
  Home01SolidIcon,
  Saturn01Icon,
  Saturn01SolidIcon,
  TestTube01Icon,
  TestTube01SolidIcon,
  Wallet02Icon,
  Wallet02SolidIcon,
} from '@assets/icons/icons'
import { PaddingBottom } from '@components/SafePadding'
import { createBottomTabNavigator, type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Colors } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import React, { type ReactNode } from 'react'
import { TouchableOpacity, View, type ColorSchemeName, useColorScheme } from 'react-native'
import colors from 'tailwindcss/colors'
import HomeScreen from './Home/HomeScreen'
import TyrItOut from './Try/TyrItOut'
import ComingSoon from './UnderConstruction'
import { colorScheme } from 'nativewind'

const Tab = createBottomTabNavigator()

function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <TabBar
      state={state}
      descriptors={descriptors}
      navigation={navigation}
      insets={{ bottom: 0, left: 0, right: 0, top: 0 }}
    />
  )
}

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const scheme = useColorScheme()
  return (
    <View className='bg-white dark:bg-zinc-950'>
      <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]!
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          const color = isFocused ? getFocusedColor(scheme) : getColor(scheme)

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.6}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              className='flex items-center justify-center p-1'
              style={{ flex: 1, paddingTop: 13.5, paddingBottom: 8 }}
            >
              {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color, size: 23 })}
              <SemiBold style={{ color, marginTop: 3.5, fontSize: 8.5 }}>{label as ReactNode}</SemiBold>
            </TouchableOpacity>
          )
        })}
      </View>
      <PaddingBottom />
    </View>
  )
}

export function getFocusedColor(theme: ColorSchemeName) {
  // return theme === 'dark' ? colors.zinc[200] : colors.zinc[800]
  return Colors.accent
}

export function getColor(theme: ColorSchemeName) {
  return theme === 'dark' ? colors.zinc[400] : colors.zinc[600]
}

const screens = [
  { name: 'HomeScreen', label: 'Home', focusedIcon: Home01SolidIcon, defaultIcon: Home01Icon, component: HomeScreen },
  {
    name: 'TryItOut',
    label: 'Try it out',
    focusedIcon: TestTube01SolidIcon,
    defaultIcon: TestTube01Icon,
    component: TyrItOut,
  },
  {
    name: 'Explore',
    label: 'Explore',
    focusedIcon: Saturn01SolidIcon,
    defaultIcon: Saturn01Icon,
    component: ComingSoon,
  },
  { name: 'Wallet', label: 'Wallet', focusedIcon: Wallet02SolidIcon, defaultIcon: Wallet02Icon, component: ComingSoon },
]

const Home = () => {
  return (
    <>
      <Tab.Navigator tabBar={BottomTabBar} screenOptions={{ animation: 'shift' }}>
        {screens.map((screen) => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: screen.label,
              headerShown: false,
              tabBarIcon: (props) => (
                <TabIcon {...props} focusedIcon={screen.focusedIcon} defaultIcon={screen.defaultIcon} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  )
}

type TabIconT = {
  focused: boolean
  color: string
  size: number
  focusedIcon: React.ComponentType<any>
  defaultIcon: React.ComponentType<any>
}

function TabIcon({ focused, color, size, focusedIcon: FocusedIcon, defaultIcon: DefaultIcon }: TabIconT) {
  return focused ? (
    <FocusedIcon height={size} width={size} color={color} />
  ) : (
    <DefaultIcon height={size} width={size} color={color} />
  )
}

export default Home
