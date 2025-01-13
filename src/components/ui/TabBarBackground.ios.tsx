import { useContext } from 'react'
import { StyleSheet } from 'react-native'

import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs'

import { BlurView } from 'expo-blur'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function BlurTabBarBackground() {
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  )
}

export function useBottomTabOverflow() {
  const tabHeight = useContext(BottomTabBarHeightContext) ?? 0
  const { bottom } = useSafeAreaInsets()
  return tabHeight - bottom
}
