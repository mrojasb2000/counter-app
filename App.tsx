import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.textL}>My Counter App!</Text>
      <Text style={styles.textXL}>{count}</Text>
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
  textL: {
    fontSize: 20,
    fontWeight: 500,
    color: '#fff'
  },
  textXL: {
    fontSize: 40,
    fontWeight: 500,
    color: '#fff'
  },
});


