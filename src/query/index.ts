import { navigationStore } from '@/zustand/navigationStore'
import NetInfo from '@react-native-community/netinfo'
import { useFocusEffect } from '@react-navigation/native'
import { onlineManager, QueryClient, type NotifyOnChangeProps } from '@tanstack/react-query'
import React from 'react'
import { Alert } from 'react-native'

// Online Status Manager
onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected)
  })
})

// Refetch on App Focus
// function onAppStateChange(status: AppStateStatus) {
//   if (Platform.OS !== 'web') {
//     focusManager.setFocused(status === 'active')
//   }
// }
// useEffect(() => {
//   const subscription = AppState.addEventListener('change', onAppStateChange)
//   return () => subscription.remove()
// }, [])

// Refetch on Screen Focus
export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = React.useRef(true)
  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false
        return
      }
      refetch()
    }, [refetch]),
  )
}

// Disable re-renders on out of focus Screens
export function useFocusNotifyOnChangeProps(notifyOnChangeProps?: NotifyOnChangeProps) {
  const focusedRef = React.useRef(true)

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true

      return () => {
        focusedRef.current = false
      }
    }, []),
  )

  return () => {
    if (!focusedRef.current) {
      return []
    }

    if (typeof notifyOnChangeProps === 'function') {
      return notifyOnChangeProps()
    }

    return notifyOnChangeProps
  }
}

// Disable re-renders on out of focus Screens
export function useQueryFocusAware() {
  const focusedRef = React.useRef(true)

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true

      return () => {
        focusedRef.current = false
      }
    }, []),
  )

  return () => focusedRef.current
}

type ServerResponse = {
  message: string
  status: boolean
}
const navigation = navigationStore.getState().navigation
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      select(data) {
        console.log(data)
        handleUnauthorized(data as ServerResponse)
        return data
      },
    },
    mutations: {
      onSuccess: (data) => {
        console.log(data)
        handleUnauthorized(data as ServerResponse)
      },
    },
  },
})

function handleUnauthorized(data: ServerResponse) {
  if (data.message !== 'Unauthorized') return
  navigation?.reset({
    index: 0,
    routes: [{ name: 'Login' }],
  })
  Alert.alert('Unauthorized', 'Please login again', [{ text: 'OK' }])
}
