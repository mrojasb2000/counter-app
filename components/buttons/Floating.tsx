import { StyleSheet, Text, Pressable, ViewStyle, TextStyle } from 'react-native';

interface Props {
    label: string
    position: 'left' | 'right';

    // actions
    OnPress?: () => void;
    OnPressIn?: () => void;
    OnPressOut?: () => void;

    // styles
    buttonStyle?: ViewStyle;
    labelStyle?: TextStyle;
}

const Floating = ({label, position, OnPress, OnPressIn, OnPressOut, buttonStyle, labelStyle }: Props) => {  
  const currentPositionStyle = position === 'right' ? styles.positionRight : styles.positionLeft;
  return (
    <Pressable
        style={({ pressed }) => [styles.floatingButton, currentPositionStyle, pressed ? styles.pressed : {}, buttonStyle]}
        onPress={OnPress}
        onPressIn={OnPressIn}
        onPressOut={OnPressOut}>
        <Text style={[labelStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#d9c667',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    borderRadius: 40,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positionRight: {
    bottom: 60,
    right: 40,
  },
  positionLeft: {
    bottom: 60,
    left: 40,
  },
  pressed: {
    opacity: 0.8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 1,
  },
});

export default Floating;
