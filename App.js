import React, { Component } from 'react';
import { createNavigationContainer, createStackNavigator } from 'react-navigation';
import AppNavigator from './app/routes';

const App = createNavigationContainer(AppNavigator);

export default App;