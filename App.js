import React, { Component } from 'react';
import { createNavigationContainer, createStackNavigator } from 'react-navigation';
import AppNavigator from './app/routes';


const App = createNavigationContainer(AppNavigator);

// const navigator = createNavigationContainer(AppNavigator);
// const App = () => (
//   navigator
// );

// AppRegistry.registerComponent('MyApplication', () => App);

export default App;