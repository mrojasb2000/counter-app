import { StyleSheet, Text, Pressable, ViewStyle, TextStyle } from 'react-native';

interface Props {
    label: string

    // actions
    OnPress?: () => void;
    OnPressIn?: () => void;
    OnPressOut?: () => void;

    // styles
    buttonStyle?: ViewStyle;
    labelStyle?: TextStyle;
}

const Floating = ({label, OnPress, OnPressIn, OnPressOut, buttonStyle, labelStyle }: Props) => {  
  return (
    <Pressable
        style={[styles.floatingButton, buttonStyle]}
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
  }
});

export default Floating;
