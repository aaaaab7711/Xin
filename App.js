/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import ReactDOM from 'react-dom';

import { createStackNavigator } from '@react-navigation/stack';
// import SubmissionText from './components/Submission.jsx';
// import Photo from './components/Photo.jsx';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';

import Submissionscreen from './src/Submissionscreen.js';
import Congratscreen from './src/Congratscreen.js';
import Rewardscreen from './src/Rewardscreen.js';
import Addscreen from './src/Addscreen.js';
import Searchscreen from './src/Searchscreen.js';
import Homescreen from './src/Homescreen.js';
import Storescreen from './src/Storescreen.js';
import Profilescreen from './src/Profilescreen.js';


const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }} >
    // <StatusBar barStyle={'light-content'} />
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Submissionscreen"
          component={Submissionscreen}
          options={{ title: 'Submissionscreen' }}
        />
        <Stack.Screen name="Congratscreen" component={Congratscreen} />
        <Stack.Screen name="Rewardscreen" component={Rewardscreen} />
        <Stack.Screen name="Addscreen" component={Addscreen} />
        <Stack.Screen name="Searchscreen" component={Searchscreen} />
        <Stack.Screen name="Profilescreen" component={Profilescreen} />
        <Stack.Screen name="Storescreen" component={Storescreen} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}