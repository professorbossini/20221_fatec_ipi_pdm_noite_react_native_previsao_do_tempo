import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import{
  LANGUAGE
} from '@env'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{LANGUAGE}</Text>
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
});
