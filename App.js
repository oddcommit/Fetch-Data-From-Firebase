import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fetch from './src/Fetch'

export default function App() {
  return (
    <View style={styles.container}>
      <Fetch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

