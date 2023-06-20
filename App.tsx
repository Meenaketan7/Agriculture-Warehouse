import 'react-native-gesture-handler';

import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import AppNavigator from './App/screen/AppNavigator';


const App = () => {
  return (
  <>
    <StatusBar hidden/>
    <AppNavigator/>
  </>
  );
};

export default App;
