import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Floating from './components/buttons/Floating';

export default function App() {
  const [count, setCount] = useState(10);
  const intervalRef = useRef<number | null>(null);

  const handlePressIn = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 50);
  };

  const handlePressOut = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textL]}>My Counter App!</Text>
      <Text style={[styles.text, styles.textXL]}>{count}</Text>
      <Floating
        label="Add 1"
        OnPress={() => setCount(count + 1)}
        OnPressIn={handlePressIn}
        OnPressOut={handlePressOut}
        buttonStyle={styles.addOneFloatingButton}
        labelStyle={styles.textL}
      />
      <Floating
        label=" Reset "
        OnPress={() => setCount(0)}
        buttonStyle={styles.resetFloatingButton}
        labelStyle={styles.textL}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#574D84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight: 500,
    color: '#fff',
  },
  textL: {
    fontSize: 20,
  },
  textXL: {
    fontSize: 40,
  },
  addOneFloatingButton: {
    bottom: 60,
    right: 40,
  },
  resetFloatingButton: {
    bottom: 60,
    left: 40,
  }
});


