import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Floating from './components/buttons/Floating';

export default function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handlePressIn = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 150);
  };

  const handlePressOut = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePlusOne = () => {
    setCount(prev => prev + 1);
  }

  const handleMinusOne = () => {
    if (count == 0) return;
    setCount(prev => prev - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textL]}>My Counter App!</Text>
      <Text style={[styles.text, styles.textXL]}>{count}</Text>
      {/* <Floating
        label="Add 1"
        position='right'
        OnPress={() => setCount(count + 1)}
        OnPressIn={handlePressIn}
        OnPressOut={handlePressOut}
        labelStyle={styles.textL}
      /> */}
      {/* <Floating
        label=" Reset "
        position='left'
        OnPress={() => setCount(0)}
        labelStyle={styles.textL}
        buttonStyle={{ backgroundColor: '#67d9b7' }}
      /> */}
      <Pressable style={({ pressed }) => [
        styles.floatingButtonMinusOne,
        {
          backgroundColor: pressed ? '#aaaaab' : '#65558F', // Dark gray on press, purple normally
        },
      ]} onPress={handleMinusOne} onLongPress={() => setCount(0)}>
        <Text style={{ color: 'white'}}>-1</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [
        styles.floatingButtonPlusOne,
        {
          backgroundColor: pressed ? '#aaaaab' : '#65558F', // Dark gray on press, purple normally
        },
      ]} onPress={handlePlusOne} onLongPress={() => setCount(0)}>
        <Text style={{ color: 'white'}}>+1</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight: 500,
    color: '#65558F',
  },
  textL: {
    fontSize: 20,
  },
  textXL: {
    fontSize: 40,
  },
  floatingButtonMinusOne: {
    position: 'absolute',
    bottom: 80,
    left: 80,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  floatingButtonPlusOne: {
    position: 'absolute',
    bottom: 80,
    right: 80,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  }
});


