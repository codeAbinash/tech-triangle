import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollViewProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

interface KeyboardAvoidingContainerProps extends ScrollViewProps {}

export default function KeyboardAvoidingContainer(props: KeyboardAvoidingContainerProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps='always'
          {...props}
        >
          {props.children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
