import popupStore from '@/zustand/popupStore'
import { H } from '@utils/dimensions'
import { Medium, SemiBold } from '@utils/fonts'
import React from 'react'
import { Modal, ScrollView, TouchableOpacity, View } from 'react-native'

type PopupT = {
  index: number
  text?: string
  title?: string
  buttons: {
    text: string
    onPress?: () => void
  }[]
}

const Popup = React.memo<PopupT>(({ text, title, buttons, index }) => {
  const removePopup = popupStore((store) => store.removePopup)

  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={true}
        hardwareAccelerated
        statusBarTranslucent
        onRequestClose={() => removePopup(index)}
      >
        <View className='flex-1 items-center justify-center bg-black/40 dark:bg-black/50'>
          <View className='w-[85%] rounded-xl bg-white dark:bg-zinc-900'>
            <View className='px-6 pt-5'>
              <SemiBold className='text-base text-black dark:text-white'>{title}</SemiBold>
              <ScrollView style={{ maxHeight: H * 0.65, marginTop: 10 }}>
                <Medium className='text-sm text-black dark:text-white' style={{ fontSize: 12 }}>
                  {text}
                </Medium>
              </ScrollView>
            </View>
            <View className='mt-5 flex-row flex-wrap items-center justify-end px-4 pb-5'>
              {buttons?.map((button, i) => (
                <PopupButton
                  key={i}
                  text={button.text}
                  onPress={() => {
                    button.onPress?.()
                    removePopup(index)
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
})

export default Popup

const PopupButton = React.memo<{ text: string; onPress?: () => void }>(({ text, onPress }) => {
  return (
    <TouchableOpacity
      className='min-w-20 items-center justify-center rounded-lg px-5 py-3 active:bg-black/5 dark:active:bg-white/10'
      onPress={onPress}
      activeOpacity={1}
    >
      <SemiBold className='text-black dark:text-white' style={{ fontSize: 12 }}>
        {text}
      </SemiBold>
    </TouchableOpacity>
  )
})

export const Popups = React.memo((props) => {
  const popups = popupStore((store) => store.popups)
  return (
    <>
      {popups.map((popup, index) => (
        <Popup
          key={index}
          index={index}
          text={popup.text}
          title={popup.title}
          buttons={popup.buttons || [{ text: 'OK' }]}
        />
      ))}
    </>
  )
})
