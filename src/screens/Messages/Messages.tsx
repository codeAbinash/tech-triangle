import BackHeader from '@components/BackHeader'
import KeyboardAvoidBlank from '@components/KeyboardAvoidBlank'
import { PaddingBottom } from '@components/SafePadding'
import SentIcon from '@hugeicons/SentIcon'
import { Colors } from '@utils/colors'
import { Medium, SEMIBOLD } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import { demoMessages, newMessage, type Message } from './data'

const WS_URL = 'wss://harkirat.codeabinash.workers.dev/ws'

export default function Messages({ navigation }: NavProp) {
  const [messages, setMessages] = useState<Message[]>(demoMessages)
  const [input, setInput] = useState('')
  const [connected, setConnected] = useState(false)
  const ws = useRef<WebSocket | null>(null)
  const flatListRef = useRef<FlatList>(null)
  const inputRef = useRef('')
  const layoutHeight = useRef(0)
  const contentHeight = useRef(0)
  const scheme = useColorScheme()

  const handleInputChange = useCallback((text: string) => {
    inputRef.current = text
    setInput(text)
  }, [])

  const scrollToBottom = useCallback((h: number) => {
    const offset = h - layoutHeight.current
    if (offset > 0) flatListRef.current?.scrollToOffset({ offset, animated: true })
  }, [])

  useEffect(() => {
    const socket = new WebSocket(WS_URL)
    ws.current = socket
    socket.onopen = () => setConnected(true)
    socket.onclose = () => setConnected(false)
    socket.onerror = () => setConnected(false)
    socket.onmessage = (e) => setMessages((prev) => [...prev, newMessage(String(e.data), false)])
    return () => socket.close()
  }, [])

  const sendMessage = useCallback(() => {
    const trimmed = inputRef.current.trim()
    if (!trimmed || !ws.current || ws.current.readyState !== WebSocket.OPEN) return
    handleInputChange('')
    ws.current.send(trimmed)
    setMessages((prev) => [...prev, newMessage(trimmed, true)])
  }, [handleInputChange])

  const renderMessage = useCallback(({ item }: { item: Message }) => <ChatBubble message={item} />, [])

  return (
    <>
      <KeyboardAvoidBlank>
        <View className='flex-1 bg-white dark:bg-zinc-950'>
          <BackHeader
            navigation={navigation}
            title='Messages'
            Right={
              <Medium className='text-[10px]' style={{ color: connected ? '#22c55e' : Colors.zinc[400] }}>
                {connected ? 'Connected' : 'Connecting...'}
              </Medium>
            }
          />
          <FlatList
            ref={flatListRef}
            data={messages}
            style={{ flex: 1 }}
            keyboardShouldPersistTaps='always'
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12, gap: 8 }}
            onLayout={(e) => (layoutHeight.current = e.nativeEvent.layout.height)}
            onContentSizeChange={(_, h) => {
              if (h > contentHeight.current) scrollToBottom(h)
              contentHeight.current = h
            }}
          />
          <View className='border-t border-zinc-100 bg-white px-4 pt-2 pb-1 dark:border-zinc-800 dark:bg-zinc-950'>
            <View className='flex-row items-end' style={{ gap: 10 }}>
              <View className='min-h-10 flex-1 justify-center rounded-xl bg-zinc-100 px-4 dark:bg-zinc-900'>
                <TextInput
                  value={input}
                  onChangeText={handleInputChange}
                  placeholder='Type a message...'
                  placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
                  className='max-h-40 py-3 text-[14px] text-zinc-800 dark:text-zinc-200'
                  style={SEMIBOLD}
                  multiline
                  cursorColor={Colors.accent}
                  selectionColor={`${Colors.accent}77`}
                  onSubmitEditing={sendMessage}
                />
              </View>
              <TouchableOpacity
                onPress={sendMessage}
                activeOpacity={0.7}
                className='bg-accent size-10 items-center justify-center rounded-full'
                style={{ opacity: input.trim() ? 1 : 0.5 }}
              >
                <SentIcon size={18} color='white' variant='solid-rounded' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidBlank>
      <PaddingBottom />
    </>
  )
}

function ChatBubble({ message }: { message: Message }) {
  const time = message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  if (message.sent)
    return (
      <View className='items-end'>
        <View className='bg-accent max-w-[80%] rounded-2xl rounded-br-sm px-4 py-2.5'>
          <Medium className='text-[14px] text-white'>{message.text}</Medium>
          <Medium className='mt-1 text-right text-[9px] text-white/60'>{time}</Medium>
        </View>
      </View>
    )

  return (
    <View className='items-start'>
      <View className='max-w-[80%] rounded-2xl rounded-bl-sm bg-zinc-100 px-4 py-2.5 dark:bg-zinc-800'>
        <Medium className='text-[14px] text-zinc-800 dark:text-zinc-200'>{message.text}</Medium>
        <Medium className='mt-1 text-[9px] text-zinc-400 dark:text-zinc-500'>{time}</Medium>
      </View>
    </View>
  )
}
