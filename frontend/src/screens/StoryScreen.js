// Screen for creating and viewing a story

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Recorder from '../components/Recorder';

export default function StoryScreen() {
  const [recording, setRecording] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Record Your Drama</Text>
      <Recorder recording={recording} setRecording={setRecording} />
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={() => setRecording(!recording)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191970',
  },
  title: {
    fontSize: 24,
    color: '#F5F5F5',
    marginBottom: 20,
  },
});
