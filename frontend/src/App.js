// Main entry point for the React Native app

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';
import StoryScreen from './screens/StoryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Story" component={StoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
