import authStore from '@/zustand/authStore'
import { navigationStore } from '@/zustand/navigationStore'
import popupStore from '@/zustand/popupStore'
import { queryClient } from '@query/index'

export function logout() {
  const navigation = navigationStore.getState().navigation
  authStore.getState().removeToken()
  popupStore.getState().clear()
  queryClient.clear()
  navigation?.reset({ index: 0, routes: [{ name: 'Login' }] })
}

export function handleLogout(logoutMutation: () => void) {
  const alert = popupStore.getState().alert
  alert('Log out', 'Are you sure you want to log out from this device?', [
    {
      text: 'Log out',
      onPress() {
        logoutMutation()
        alert('Please wait', 'Please wait while we log you out', [], true)
      },
    },
    { text: 'Cancel' },
  ])
}
