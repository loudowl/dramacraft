// Component for recording audio

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Recorder({ recording, setRecording }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {recording ? 'Recording...' : 'Press to start recording'}
      </Text>
      {/* Implement audio recording logic here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#F5F5F5',
  },
});
