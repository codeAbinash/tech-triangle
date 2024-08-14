import { PaddingBottom } from '@components/SafePadding'
import { createBottomTabNavigator, type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import COL, { Colors } from '@utils/colors'
import type { ReactNode } from 'react'
import React from 'react'
import { Text, TouchableOpacity, useColorScheme, View, type ColorSchemeName } from 'react-native'
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
import HomeScreen from './Home/HomeScreen'
import ComingSoon from './UnderConstruction'
import TyrItOut from './Try/TyrItOut'
const Tab = createBottomTabNavigator()

function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return <TabBar state={state} descriptors={descriptors} navigation={navigation} insets={{ bottom: 0, left: 0, right: 0, top: 0 }} />
}

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const theme = useColorScheme()
  return (
    <View className='bg-white dark:bg-zinc-950'>
      <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name
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

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.6}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              className='flex items-center justify-center p-1'
              style={{ flex: 1, paddingTop: 13.5, paddingBottom: 8 }}
            >
              {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: getGrayColor(theme), size: 23 })}
              <Text style={{ color: isFocused ? Colors.accent : getGrayColor(theme), marginTop: 2.5, fontSize: 11, fontFamily: 'Poppins-Medium' }}>
                {label as ReactNode}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <PaddingBottom />
    </View>
  )
}

export function getGrayColor(theme: ColorSchemeName) {
  return theme === 'dark' ? COL.gray600 : COL.gray400
}

const Home = () => {
  return (
    <>
      <Tab.Navigator tabBar={BottomTabBar}>
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: HomeIcon,
          }}
        />
        <Tab.Screen
          name='TryItOut'
          component={TyrItOut}
          options={{
            tabBarLabel: 'Try it out',
            headerShown: false,
            tabBarIcon: Try,
          }}
        />
        <Tab.Screen
          name='Explore'
          component={ComingSoon}
          options={{
            tabBarLabel: 'Explore',
            headerShown: false,
            tabBarIcon: ExploreIcon,
          }}
        />
        <Tab.Screen
          name='Wallet'
          component={ComingSoon}
          options={{
            tabBarLabel: 'Wallet',
            headerShown: false,
            tabBarIcon: WalletIcon,
          }}
        />
      </Tab.Navigator>
    </>
  )
}

function HomeIcon(props: { focused: boolean; color: string; size: number }) {
  return props.focused ? (
    <Home01SolidIcon {...props} height={props.size} width={props.size} color={Colors.accent} />
  ) : (
    <Home01Icon {...props} height={props.size} width={props.size} />
  )
}

function WalletIcon(props: { focused: boolean; color: string; size: number }) {
  return props.focused ? (
    <Wallet02SolidIcon {...props} height={props.size} width={props.size} color={Colors.accent} />
  ) : (
    <Wallet02Icon {...props} height={props.size} width={props.size} />
  )
}

function Try(props: { focused: boolean; color: string; size: number }) {
  return props.focused ? (
    <TestTube01SolidIcon {...props} height={props.size} width={props.size} color={Colors.accent} />
  ) : (
    <TestTube01Icon {...props} height={props.size} width={props.size} />
  )
}

function ExploreIcon(props: { focused: boolean; color: string; size: number }) {
  return props.focused ? (
    <Saturn01SolidIcon {...props} height={props.size} width={props.size} color={Colors.accent} />
  ) : (
    <Saturn01Icon {...props} height={props.size} width={props.size} />
  )
}

export default Home
