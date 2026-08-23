import { Text, Pressable, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

interface Props {
  label: string,

  // Actions
  onPress: () => void;
  onLongPress: () => void;

  // Styles
  styles: StyleProp<ViewStyle>
}

const FloatingButton = ({label, onPress, onLongPress, styles}: Props) => {
  return (
    <Pressable style={({ pressed }) => [
      styles,
      {
        backgroundColor: pressed ? '#aaaaab' : '#65558F', // Dark gray on press, purple normally
      },
      ]} 
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: 'white'}}>{label}</Text>
    </Pressable>
  )
}

export default FloatingButton