import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title="React Native Bare Workflow com Typescript" />
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
