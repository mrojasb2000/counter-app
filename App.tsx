import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
      <Pressable
        style={[styles.floatingButton, styles.addOneFloatingButton]}
        onPress={() => setCount(count + 1)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <Text style={[styles.textL]}>+1</Text>
      </Pressable>
      <Pressable
        style={[styles.floatingButton, styles.resetFloatingButton]}
        onPress={() => setCount(0)}>
        <Text style={[styles.textL]}> 0 </Text>
      </Pressable>
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
  addOneFloatingButton: {
    bottom: 60,
    right: 40,
  },
  resetFloatingButton: {
    bottom: 60,
    left: 40,
  }
});


