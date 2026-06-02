// Home screen of the app

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DramaCraft</Text>
      <Button
        title="Create a New Story"
        onPress={() => navigation.navigate('Story')}
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
