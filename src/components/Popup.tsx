import popupStore, { type ButtonVariant, type PopupButtonDef } from '@/zustand/popupStore'
import { H } from '@utils/dimensions'
import { Medium, SemiBold } from '@utils/fonts'
import React from 'react'
import { Modal, ScrollView, TouchableOpacity, View } from 'react-native'
import { HEADING_SIZE, MAIN_TEXT_SIZE } from './values'

type PopupT = {
  index: number
  text?: string
  title?: string
  buttons: PopupButtonDef[]
  noClose?: boolean
}

const variantStyles: Record<ButtonVariant, { bg: string; text: string }> = {
  default: { bg: 'bg-(--bg) dark:bg-zinc-800', text: 'text-black dark:text-white' },
  primary: { bg: 'bg-blue-500', text: 'text-white' },
  destructive: { bg: 'bg-(--bg) dark:bg-zinc-800', text: 'text-red-500' },
}

const Popup = React.memo<PopupT>(({ text, title, buttons, index, noClose }) => {
  const removePopup = popupStore((store) => store.removePopup)
  const isRow = buttons.length === 2

  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={true}
        hardwareAccelerated
        statusBarTranslucent
        onRequestClose={() => {
          if (!noClose) removePopup(index)
        }}
      >
        <View className='flex-1 items-center justify-center bg-black/40 dark:bg-black/50'>
          <View className='w-[83%] rounded-4xl bg-white dark:bg-zinc-900'>
            <View className='px-7 pt-6'>
              <SemiBold className='text-black dark:text-white' style={{ fontSize: HEADING_SIZE }}>
                {title}
              </SemiBold>
              <ScrollView style={{ maxHeight: H * 0.65, marginTop: 8 }}>
                <Medium className='text-black/70 dark:text-white/70' style={{ fontSize: MAIN_TEXT_SIZE + 1 }}>
                  {text}
                </Medium>
              </ScrollView>
            </View>
            <View className={`mt-8 gap-2 px-5 pb-5 ${isRow ? 'flex-row' : 'flex-col'}`}>
              {buttons.map((button, i) => (
                <PopupButton
                  key={i}
                  text={button.text}
                  variant={button.variant ?? 'default'}
                  isRow={isRow}
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

type PopupButtonProps = {
  text: string
  onPress?: () => void
  variant: ButtonVariant
  isRow: boolean
}

const PopupButton = React.memo<PopupButtonProps>(({ text, onPress, variant, isRow }) => {
  const { bg, text: textColor } = variantStyles[variant]
  return (
    <TouchableOpacity
      className={`items-center justify-center rounded-full px-4 py-4 ${bg} ${isRow ? 'flex-1' : 'w-full'}`}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <SemiBold className={textColor} style={{ fontSize: MAIN_TEXT_SIZE + 1, marginBottom: 2 }}>
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
          noClose={popup.noClose}
          buttons={popup.buttons || [{ text: 'OK' }]}
        />
      ))}
    </>
  )
})
