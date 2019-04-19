import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './HomeScreen';
import AllDocsScreen from './AllDocsScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: AllDocsScreen},
  AllDocs: {screen: AllDocsScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
